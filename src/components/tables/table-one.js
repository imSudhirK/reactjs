import React, { Fragment, useEffect, useRef, useState } from "react";
import { Divider, Input, Radio, Table, message } from "antd";
import datajson from "../../datas/one-table.json";
import { HorizontalLine, StyledButton, StyledDiv, StyledInput, StyledText } from "../../styledComponents/styles-one"
import { debouncedSearch } from "../../helpers/utils-one";
import { testApiCall } from "../../api/apis-one";
import { csvExportV01 } from "../../helpers/utils-tables";

const OneTable = () => {
    const refSearchByName = useRef(null);
    const [data, setData] = useState(datajson);
    const [selectionType, setSelectionType] = useState("checkbox");
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [selectedRowData, setSelectedRowData] = useState([]);
    const [selectedTotalSalary, setSelectedTotalSalary] = useState(0);

    const onChangeSelectionType = (event) => {
        setSelectionType(event.target.value);
    }

    // on change of row immediately render amount
    const onChangeSelectedRow = () => {
        if (selectedRowData.length) {
            let amount = 0;
            selectedRowData.forEach((row) => amount += Number(row.salary));
            setSelectedTotalSalary(amount)
        }
    }

    // TODO:
    const onChangeSalary = (event) => {
        const { name, value } = event.target;
        selectedRowData.forEach((row) => {
            if (row.id == name) {
                if (row.salary < Number(value)) { message.error(`Couldn't increase salary`) }
            }
        })
    }

    // Search //
    const handleSearchByName = () => {
        const searchText = refSearchByName.current?.input?.value;
        if (!searchText) return setData(datajson);
        const newData = datajson.filter((obj) => {
            if (obj.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) return true;
            return false;
        })
        setData(newData);
    }

    // handle confirm //
    const handleConfirm = () => {
        testApiCall().then((resp) => console.log(resp))
            .catch((err) => console.log(err));
    }

    // Row Selection //
    const onRowSelectionChange = (selectedRowKeys, selectedRows) => {
        setSelectedRowIds(selectedRowKeys);
        setSelectedRowData(selectedRows);
    }

    const tableRowSelection = {
        type: selectionType,
        columnTitle: "Select",
        hideSelectAll: true,
        preserveSelectedRowKeys: true,
        selectedRowKeys: selectedRowIds,
        onChange: onRowSelectionChange,
        getCheckboxProps: (record) => ({
            disabled: record.id % 5 == 0
        })
    }

    const columns = [
        {
            title: "ID",
            key: 'id',
            dataIndex: 'id'
        },
        {
            title: "Date",
            key: 'date',
            dataIndex: 'date'
        },
        {
            title: "Name",
            key: 'name',
            dataIndex: 'name'
        },
        {
            title: "Salary",
            key: 'salary',
            dataIndex: 'salary',
            render: (val, record) => {
                return <Input name={record.id} defaultValue={val} onChange={(event) => onChangeSalary(event)} />
            }
        }
    ]

    // export data
    const handleExportCSV = () => {
        const csvHeaders = [
            { label: "ID", key: "id" },
            { label: "Name", key: "name" },
            { label: "Salary", key: "salary" },
            { label: "Date", key: "date" }
        ]

        csvExportV01(data, 'table-one.csv', csvHeaders)
    }

    // useEffects //
    useEffect(() => {
        onChangeSelectedRow();
    }, [selectedRowData, selectedTotalSalary])

    return (
        <Fragment>
            <HorizontalLine />
            <StyledDiv d="flex" ai="center">
                <StyledDiv d="flex" fd="column" ai="center" w="15%">
                    <StyledText>Selection Type</StyledText>
                    <Radio.Group value={selectionType} onChange={onChangeSelectionType}>
                        <Radio value="checkbox">checkbox</Radio>
                        <Radio value="radio">radio</Radio>
                    </Radio.Group>
                </StyledDiv>
                <StyledDiv w="35%" p="0 1%"><StyledInput
                    placeholder="Search Name" ref={refSearchByName}
                    onChange={debouncedSearch(handleSearchByName, 2000)}
                /></StyledDiv>
                <StyledDiv d="flex" jc="center" w="10%">
                    <StyledButton onClick={handleExportCSV}>Export CSV</StyledButton>
                </StyledDiv>
                <StyledDiv d="flex" jc="center" w="10%">
                    <StyledButton>Export Excel</StyledButton>
                </StyledDiv>
                <StyledDiv d="flex" jc="center" w="10%">
                    <StyledButton>Export Pdf</StyledButton>
                </StyledDiv>
            </StyledDiv>

            <HorizontalLine mb="0px" />

            <Table
                rowKey={record => record.id}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
                rowSelection={tableRowSelection}
            />

            <StyledDiv d="flex" w="60%">
                <StyledDiv p="0 1%" w="25%">
                    <StyledText ta="left" fs="16px" fw="500" lh="17px">No. Selected Row</StyledText >
                    <StyledText ta="left" fs="16px" fw="500" lh="17px">{selectedRowIds?.length}</StyledText>
                </StyledDiv>
                <StyledDiv p="0 1%" w="25%">
                    <StyledText ta="left" fs="16px" fw="500" lh="17px">Total Selected Salary</StyledText>
                    <StyledText ta="left" fs="16px" fw="500" lh="17px">{selectedTotalSalary}</StyledText>
                </StyledDiv>
                <StyledDiv d="flex" jc="center" w="50%">
                    <StyledButton w="100%" onClick={handleConfirm}>Confirm</StyledButton>
                </StyledDiv>
            </StyledDiv>
            <Divider />
        </Fragment>
    )
}

export default OneTable;