import React from "react";
import { AnimatePresence, motion } from "framer-motion";


   export const pageTransitions = {
    in:{
      opacity: 2, 
      y: 0
    },
    out: {
      opacity: 0,
      y: "-100"
    }

   
  }