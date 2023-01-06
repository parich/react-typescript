import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../reduxToolkit/hooks";
import {
  getRoomBookingThunk,
  selectRoomBookingState,
} from "../../reduxToolkit/room/roomSlice";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

function DHome() {
  const dispatch = useAppDispatch();
  const { roomBooking } = useAppSelector(selectRoomBookingState);

  useEffect(() => {
    dispatch(getRoomBookingThunk());
  }, []);

  const onSelectEvent = (calEvent: any) => {
    alert(JSON.stringify(calEvent));
  };

  return (
    <>
      <h1>List room booking</h1>
      <Calendar
        culture="th-TH"
        localizer={localizer}
        events={[
          ...(roomBooking?.events != undefined ? roomBooking.events : []),
        ]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
      />
    </>
  );
}

export default DHome;
