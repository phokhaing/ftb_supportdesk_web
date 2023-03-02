import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import auth from "../services/AuthService";

/**
 * detect user idleness broswer app (10 minutes )
 * then log users out of application
 */
const checkAutoSignout = async () => {
   const router = useRouter();

   const [isExpired, setIsExpired] = useState(true);

   const checkForInactivity = async () => {
      // set expire time to local storage
      const expiredTime = localStorage.getItem("expireTime");

      // If expire time is earlier than now, log out
      if (expiredTime < Date.now()) {
         setIsExpired(false);
         // auto signout
         await auth.authSignOut();
         router.push("/signin");
      }
   };

   useEffect(() => {
      // Check for inactivity every 5 seconds
      const interval = setInterval(() => {
         checkForInactivity();
      }, 5000); // milliseconds

      // Clear interval on unmount
      return () => clearInterval(interval);
   }, []);

   const updateExpireTime = () => {
      // set expire time to 1 hour from now
      const expiredTime = Date.now() + 600000; // 600000 miliseconds (10 minutes)
      // Set expire time in localstorage
      localStorage.setItem("expireTime", expiredTime);
   };

   useEffect(() => {
      // Set initial expire time
      updateExpireTime();

      // set event listener
      window.addEventListener("click", updateExpireTime);
      window.addEventListener("keypress", updateExpireTime);
      window.addEventListener("scroll", updateExpireTime);
      window.addEventListener("mousemove", updateExpireTime);

      // clearn up
      return () => {
         window.addEventListener("click", updateExpireTime);
         window.addEventListener("keypress", updateExpireTime);
         window.addEventListener("scroll", updateExpireTime);
         window.addEventListener("mousemove", updateExpireTime);
      };
   }, []);
};

export default checkAutoSignout;
