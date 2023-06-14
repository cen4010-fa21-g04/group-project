import Footer from '@/components/footer';
import Header from '@/components/head';
import Navbar from '@/components/navbar';
import {
  ReservationProps,
  ReservationService,
} from '@/services/ReservationService';
import { Button, TextField } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React, { useRef, useState } from 'react';

const reservationService = new ReservationService();

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Reservations() {
  const [value, setValue] = useState(dayjs('2022-04-17T15:30'));
  const nameRef = useRef(null);
  const numberRef = useRef(null);
  const [open, setOpen] = useState(null);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();

      const payload: ReservationProps = {
        name: String(nameRef.current.value),
        numberOfGuests: Number(numberRef.current.value),
        date: new Date(value.format()),
      };

      const { error, body } = await reservationService.createReservation(
        payload
      );

      if (error) throw new Error(error);

      //clear inputs
      nameRef.current.value = '';
      numberRef.current.value = '';

      setOpen('Reservation created!');
      console.log(body);
    } catch (e) {
      console.error(e);
      setOpen(e.message);
    }
  };
  return (
    <main className="layout_container">
      <Header title="OnlyTable | Reservations" />
      <Navbar />
      <div className="reservations">
        <form onSubmit={handleSubmit} className="reservations_form">
          <TextField
            id="outlined-basic"
            label="Reservation Name"
            variant="outlined"
            inputRef={nameRef}
            required
          />
          <TextField
            id="outlined-basic"
            label="Number of people"
            type="number"
            variant="outlined"
            inputRef={numberRef}
            required
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Date of Reservation"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: 'orange !important' }}
          >
            Create Reservation
          </Button>
        </form>
      </div>

      <Snackbar
        open={Boolean(open)}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {open}
        </Alert>
      </Snackbar>

      <Footer href="/login" title="Employee / Restaurant View" />
    </main>
  );
}
