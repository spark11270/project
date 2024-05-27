"use client";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';

import { RetailItem } from '@/constants/types';
import React from 'react';

type TableProps = {
  items: RetailItem[];
}

const SelectableTable: React.FC<TableProps> = ({ items } : { items: RetailItem[] }) => {
  const [selected, setSelected] = React.useState<number>();
  
  return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align='left'>Category</TableCell>
            <TableCell align='left'>Description</TableCell>
            <TableCell align='left'>Price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {items.map((item) => (
            <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={selected == item.id}
                    onClick={() => setSelected(item.id)}
                  />
                </TableCell>
                <TableCell component='th' scope='row'>{item.name}</TableCell>
                <TableCell align='left'>{item.category}</TableCell>
                <TableCell align='left'>{item.description}</TableCell>
                <TableCell align='left'>{`$${item.price}`}</TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
      </TableContainer>
    );
  };

export default SelectableTable;
