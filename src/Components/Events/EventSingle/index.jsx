import { React, useState, useEffect } from "react";
import Register from "./Register";
import EventDetails from "./EventDetails";
import HeroSection from "../../Shared/HeroSection";
import axios from "axios";
import Loader from "../../Shared/Loader";
import { useStateContext } from "../../../Contexts/ContextProvider";

const EventSingle = ({ eventId }) => {
  const { loginUser } = useStateContext();

  const [event, setEvent] = useState("");
  const [team, setTeam] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(true);

  const getEventDetails = async () => {
    try {
      let res;
      if (loginUser)
        ({ data: res } = await axios.post(`/api/v1/events/${eventId}`, {
          userId: loginUser._id,
        }));
      else ({ data: res } = await axios.post(`/api/v1/events/${eventId}`));
      // console.log(res)
      setEvent(res.data.event);
      setTeam(res.data.team);
      setIsRegistered(res.data.isRegistered);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEventDetails();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center p-10">
          <Loader />
        </div>
      ) : (
        <div>
          <HeroSection
            title={event.title}
            desc={event.subtitle}
            breadParams={[
              {
                title: "Instruo",
                url: "/",
              },
              {
                title: "Events",
                url: "/events",
              },
              {
                title: event.title,
                url: "",
              },
            ]}
          />
          <div>
            <EventDetails {...event} />
            <div className="mb-8">
              <h2 className="mb-8 text-5xl font-bold text-center">
                Registration Status
              </h2>
              <Register {...event} team={team} isRegistered={isRegistered} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSingle;
