import { RoomBooking } from "../appTypes/roomBookingType";
import { AxiosResponse, http } from "./http.service";

export async function getRoomBooking(): Promise<AxiosResponse<RoomBooking>> {
  return await http.get<RoomBooking>(
    "https://api.codingthailand.com/api/events"
  );
}
