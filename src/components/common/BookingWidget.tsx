import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  MenuItem,
  useTheme,
  useMediaQuery,
  Fab,
  Drawer,
  IconButton,
  Divider,
} from '@mui/material';
import {
  DatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CalendarToday, Close, Search } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const bookingSchema = yup.object({
  checkIn: yup.date().required('Check-in date is required'),
  checkOut: yup.date().required('Check-out date is required'),
  guests: yup.number().required().min(1, 'At least 1 guest required').max(16, 'Maximum 16 guests'),
}).required();

interface BookingFormData {
  checkIn: Date;
  checkOut: Date;
  guests: number;
}

interface BookingWidgetProps {
  variant?: 'card' | 'drawer';
  onBookingSubmit?: (data: BookingFormData) => void;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ 
  variant = 'card',
  onBookingSubmit 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookingFormData>({
    resolver: yupResolver(bookingSchema),
    defaultValues: {
      checkIn: new Date(),
      checkOut: new Date(),
      guests: 2,
    },
  });

  const checkIn = watch('checkIn');

  const onSubmit = (data: BookingFormData) => {
    onBookingSubmit?.(data);
    if (isMobile && variant === 'drawer') {
      setDrawerOpen(false);
    }
  };

  const guestOptions = Array.from({ length: 16 }, (_, i) => i + 1);

  const bookingCard = (
    <Card
      component={motion.div}
      whileHover={{ y: -4 }}
      sx={{
        borderRadius: 3,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom sx={{ fontFamily: '"Playfair Display", serif', mb: 3 }}>
          Check Availability
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              name="checkIn"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="Check-in Date"
                  value={field.value}
                  onChange={field.onChange}
                  disablePast
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.checkIn,
                      helperText: errors.checkIn?.message,
                      InputProps: {
                        startAdornment: <CalendarToday sx={{ mr: 1, color: 'text.secondary' }} />,
                      },
                    },
                  }}
                />
              )}
            />

            <Controller
              name="checkOut"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="Check-out Date"
                  value={field.value}
                  onChange={field.onChange}
                  disablePast
                  minDate={checkIn || undefined}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.checkOut,
                      helperText: errors.checkOut?.message,
                      InputProps: {
                        startAdornment: <CalendarToday sx={{ mr: 1, color: 'text.secondary' }} />,
                      },
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>

          <Controller
            name="guests"
            control={control}
            render={({ field }) => (
              <TextField
                select
                label="Number of Guests"
                value={field.value}
                onChange={field.onChange}
                error={!!errors.guests}
                helperText={errors.guests?.message}
                fullWidth
              >
                {guestOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option} {option === 1 ? 'Guest' : 'Guests'}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
            startIcon={<Search />}
            sx={{
              mt: 2,
              py: 1.5,
              background: 'linear-gradient(135deg, #B8860B 0%, #D4A012 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #8B6508 0%, #B8860B 100%)',
              },
            }}
          >
            Check Availability
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  if (variant === 'drawer' && isMobile) {
    return (
      <>
        <Fab
          color="secondary"
          aria-label="check availability"
          onClick={() => setDrawerOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <Search />
        </Fab>

        <Drawer
          anchor="bottom"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              maxHeight: '80vh',
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif' }}>
                Check Availability
              </Typography>
              <IconButton onClick={() => setDrawerOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            <Divider sx={{ mb: 2 }} />
            {bookingCard}
          </Box>
        </Drawer>
      </>
    );
  }

  return bookingCard;
};

export default BookingWidget;
