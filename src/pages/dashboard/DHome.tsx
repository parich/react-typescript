import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../reduxToolkit/hooks";
import {
  getRoomBookingThunk,
  selectRoomBookingState,
} from "../../reduxToolkit/room/roomSlice";

function DHome() {
  const dispatch = useAppDispatch();
  const { roomBooking } = useAppSelector(selectRoomBookingState);

  useEffect(() => {
    dispatch(getRoomBookingThunk());
  }, []);

  return (
    <>
      <h1>list room booking</h1>
      <p>{JSON.stringify(roomBooking?.events)}</p>
    </>
  );
}

export default DHome;
