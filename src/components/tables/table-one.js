import React, { Fragment, useEffect, useRef, useState } from "react";
import { Divider, Input, Radio, Table, message } from "antd";
import datajson from "../../datas/one-table.json";
import { StyledButton, StyledDiv, StyledInput, StyledText } from "../../styledComponents/styles-one"
import { debouncedSearch } from "../../helpers/utils-one";
import { testApiCall } from "../../api/apis-one";

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

    // useEffects //
    useEffect(() => {
        onChangeSelectedRow();
    }, [selectedRowData, selectedTotalSalary])


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

    return (
        <Fragment>
            <div>Selection Type</div>
            <Radio.Group value={selectionType} onChange={onChangeSelectionType}>
                <Radio value="checkbox">checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>
            <StyledInput w="500px"
                placeholder="Search Name" ref={refSearchByName}
                onChange={debouncedSearch(handleSearchByName, 2000)}
            />
            <Divider />
            <Table
                rowKey={record => record.id}
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 5 }}
                rowSelection={tableRowSelection}
            />
            <StyledDiv d="flex" w="60%">
                <StyledDiv>
                    <StyledText ta="left" c="#000000" fs="16px" lh="17px" fw="500" ls="0.6px" margin="-2px auto 0px auto">
                        No. Selected Row
                    </StyledText >
                    <StyledText ta="left" c="#000000" fs="16px" lh="17px" fw="500" ls="0.6px" margin="-2px auto 0px auto">
                        {selectedRowIds.length}
                    </StyledText>
                </StyledDiv>
                <StyledDiv>
                    <StyledText ta="left" c="#000000" fs="16px" lh="17px" fw="500" ls="0.6px" margin="-2px auto 0px auto">
                        Total Selected Salary
                    </StyledText>
                    <StyledText ta="left" c="#000000" fs="16px" lh="17px" fw="500" ls="0.6px" margin="-2px auto 0px auto">
                        {selectedTotalSalary}
                    </StyledText>
                </StyledDiv>
                <StyledDiv>
                    <StyledButton fw="700" h="43px" br="4px" fs="16px" lh="21.6px" hoverable
                        onClick={handleConfirm}
                    >Confirm</StyledButton>
                </StyledDiv>
            </StyledDiv>
        </Fragment>
    )
}

export default OneTable;