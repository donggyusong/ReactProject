import React, { useState, useEffect } from 'react';
import MyGrid from 'util/LogiUtil/MyGrid';
import { useTheme } from '@mui/material/styles';
import {
    searchWorkplaceList,
    addWorkplaceTO,
    delWorkplaceTO,
    saveWorkplace
} from 'erp/logistic/base/action/BasicInfoAction';
import MyDialog from 'util/LogiUtil/MyDialog';
import AddWorkplace from 'erp/logistic/base/page/AddWorkplace';
import { useDispatch, useSelector } from 'react-redux';
import RootReducers from "../../../../root/RootReducer";
import MainCard from "../../../../template/ui-component/cards/MainCard";
import CardSecondaryAction from "../../../../template/ui-component/cards/CardSecondaryAction";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Button,
    Grid
} from "@mui/material";
import SimpleModal from "../../../../util/LogiUtil/SimpleModal";

function WorkplaceInfo(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [addOpenDialog, setAddOpenDialog] = useState(false);
    const [gridRow, setGridRow] = useState();
    const close = () => {
        setAddOpenDialog(false);
    };
    const workplaceList = useSelector(state => state.RootReducers.logistic.basicinfo.workplaceList);
    const list = workplaceList.filter(list => list.status !== 'DELETE');
    const dispatch = useDispatch();

    const theme = useTheme();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event?.target?.value);
        setPage(0);
    };
    const column = {
        columnDefs: [
            { width: '80', headerCheckboxSelection: false, checkboxSelection: true },
            { headerName: '사업장 코드', field: 'workplaceCode', hide: true },
            { headerName: '사업장', field: 'workplaceName' },
            { headerName: '사업장등록번호', field: 'businessLicenseNumber' },
            { headerName: '법인등록번호', field: 'corporationLicenseNumber' },
            { headerName: '대표자', field: 'workplaceCeoName' },
            { headerName: '업태', field: 'workplaceBusinessConditions' }, // editable : 편집가능
            { headerName: '종목', field: 'workplaceBusinessItems' } // editable : 편집가능
        ]
    };

    const columns = [
        { width: '80', headerCheckboxSelection: false, checkboxSelection: true },
        {id: 'workplaceCode', label: '사업장 코드', minWidth: 170, hide: true},
        {id: 'workplaceName', label: '사업장', minWidth: 100},
        {id: 'businessLicenseNumber', label: '사업장등록번호', minWidth: 100},
        {id: 'corporationLicenseNumber', label: '법인등록번호', minWidth: 100},
        {id: 'workplaceCeoName', label: '대표자', minWidth: 100},
        {id: 'workplaceBusinessConditions', label: '업태', minWidth: 100},
        {id: 'workplaceBusinessItems', label: '종목', minWidth: 100},
    ];

    const addClick = () => {
        setAddOpenDialog(true);
    };
    const delClick = () => {
        const selRowIndex = gridRow.getSelectedNodes();
        const rowsCount = gridRow.getDisplayedRowCount();
        for (var i = 0; i < selRowIndex.length; i++) {
            var nodeIndex = selRowIndex[i].childIndex;
            if (gridRow.getRowNode(nodeIndex).data.status === 'INSERT')
                gridRow.getRowNode(nodeIndex).data.status = '';
            else gridRow.getRowNode(nodeIndex).data.status = 'DELETE';
        }

        console.log(rowsCount);
        var newList = [];
        gridRow.forEachNodeAfterFilter(ele => {
            newList = [...newList, ele.data];
            return ele.data;
        });
        dispatch(delWorkplaceTO({ newList }));
    };

    const saveClick = () => {
        // console.log(workplaceList);
        dispatch(saveWorkplace(workplaceList));
    };

    const onSubmit = workplaceTo => {
        dispatch(addWorkplaceTO({ workplaceTo }));
        close();
    };

    const api = params => {
        setGridRow(params.api);
    };

    useEffect(() => {
        dispatch(searchWorkplaceList());
    }, [dispatch]);
    // 여기는 리덕스를 활용해보자 !!
    return (
        <>
            {/*<MyGrid*/}
            {/*    //UI에 그리드 아님*/}
            {/*    column={column}*/}
            {/*    title={'사 업 장 조 회'}*/}
            {/*    list={list}*/}
            {/*    rowSelection="multiple"*/}
            {/*    api={api}*/}
            {/*>*/}
            {/*    <Button*/}
            {/*        variant="contained"*/}
            {/*        color="secondary"*/}
            {/*        style={{ marginRight: '1vh' }}*/}
            {/*        onClick={addClick}*/}
            {/*    >*/}
            {/*        사업장 추가*/}
            {/*    </Button>*/}
            {/*    <Button*/}
            {/*        variant="contained"*/}
            {/*        color="secondary"*/}
            {/*        style={{ marginRight: '1vh' }}*/}
            {/*        onClick={delClick}*/}
            {/*    >*/}
            {/*        삭제*/}
            {/*    </Button>*/}
            {/*    <Button variant="contained" color="secondary" onClick={saveClick}>*/}
            {/*        저장*/}
            {/*    </Button>*/}
            {/*</MyGrid>*/}
            <MainCard
                content={false}
                title="사업장 정보"
                secondary={<Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginRight: '1vh' }}
                        onClick={addClick}
                    >
                        사업장 추가
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginRight: '1vh' }}
                        onClick={delClick}
                    >
                        삭제
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginRight: '1vh' }}
                        onClick={saveClick}
                    >
                        저장
                    </Button>
                </Grid> }
            >

                <TableContainer sx={{maxHeight: 440}}>
                    <Table stickyHeader aria-label="회사 정보">
                        <TableHead>
                            <TableRow

                            >
                                {columns.map((column) => (
                                    <TableCell
                                        sx={{py: 3}}
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {workplaceList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((dataList) => (
                                <TableRow sx={{py: 3}} hover role="checkbox" tabIndex={-1} key={dataList.code}>
                                    {columns.map((column) => {
                                        const value = dataList[column.id];
                                        return (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                onClick={e => onCellClicked(column)}
                                            >
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>


                </TableContainer>


                <SimpleModal open={addOpenDialog} close={close} title={'사업장정보'}>
                        <div>
                            <AddWorkplace onSubmit={onSubmit} />
                        </div>
                </SimpleModal>

                {/*<MyDialog open={addOpenDialog} close={close}>*/}
                {/*    <div>*/}
                {/*        <AddWorkplace onSubmit={onSubmit} />*/}
                {/*    </div>*/}
                {/*</MyDialog>*/}


                {/* table pagination */}
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={workplaceList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </MainCard>
        </>
    );
}

export default WorkplaceInfo;
