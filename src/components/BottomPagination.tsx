import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationControlledProps {
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function PaginationControlled({ pageNumber, setPageNumber }: PaginationControlledProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {pageNumber}</Typography>
      <Pagination count={10} page={pageNumber} onChange={handleChange} />
    </Stack>
  );
}