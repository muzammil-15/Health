"use client";

import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// import * as React from 'react';

// import Map from 'react-map-gl';

// import GeocoderControl from './GeocoderControl';
// import ControlPanel from './ControlPannel';

// // eslint-disable-next-line
// // const TOKEN = process.env.MapboxAccessToken; // Set your mapbox token here
// const TOKEN ="pk.eyJ1IjoiYWJkdWxyYTdtYW4iLCJhIjoiY2xvdnJrcDk3MHYwZjJrcWU4bHRsaTRhaSJ9.92ZDJwJAgFil80ZXA4gQcw"
// function ModalLocation() {
//   return (
//    <>

//    <Map
//         initialViewState={{
//           longitude: -79.4512,
//           latitude: 43.6568,
//           zoom: 13
//         }}

//         id="map"


//         mapStyle="mapbox://styles/mapbox/streets-v9"
//         mapboxAccessToken={TOKEN}
//       >
//         <GeocoderControl mapboxAccessToken={TOKEN} position="top-left" />
//       </Map>
//       <ControlPanel/>



//    </>
//   )
// }

// export default ModalLocation;









const ModalLocation=()=> {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="w-[100vw] bg-[red]">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
      
          <div className="grid flex-1 gap-2">
            lihazkh
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default ModalLocation;