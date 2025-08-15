"use client";
import { Suspense, useState } from "react";
import Loading from "../loading";
import VideoBG from "@/components/VideoBG";
import VideoFrame from "@/components/VideoFrame";

export default function MV() {
  const [id, setId] = useState<string>("yTsINmrAK4I?si=d1opH5UDOChlCAn_");
  const [rainyDays, setRainyDays] = useState<string>("active");
  const [blue, setBlue] = useState<string>("inactive");
  const [loveMeAgain, setLoveMeAgain] = useState<string>("inactive");
  const [slowDancing, setSlowDancing] = useState<string>("inactive");
  const [forUs, setForUs] = useState<string>("inactive");

  return (
    <Suspense fallback={<Loading />}>
      <VideoBG videoName="background.mp4" />
      <div id="centerVideo">
        <VideoFrame id={id} />
        <div className="mvTitle">
          <div>
            <a
              className={rainyDays}
              onClick={() => {
                setId("yTsINmrAK4I?si=d1opH5UDOChlCAn_");
                setRainyDays("active");
                setBlue("inactive");
                setLoveMeAgain("inactive");
                setSlowDancing("inactive");
                setForUs("inactive");
              }}
            >
              Rainy Days
            </a>
          </div>
          <div>
            <a className={blue}
              onClick={() => {
                setId("sIh9_cNCwPc?si=pAuF6CNVDhifi-1L");
                setRainyDays("inactive");
                setBlue("active");
                setLoveMeAgain("inactive");
                setSlowDancing("inactive");
                setForUs("inactive");
              }}
            >
              Blue
            </a>
          </div>
          <div>
            <a
            className={loveMeAgain}
              onClick={() => {
                setId("HYzyRHAHJl8?si=Joh4oFKx0J7pyyFX");
                setRainyDays("inactive");
                setBlue("inactive");
                setLoveMeAgain("active");
                setSlowDancing("inactive");
                setForUs("inactive");
              }}
            >
              Love Me Again
            </a>
          </div>
          <div>
            <a
            className={slowDancing}
              onClick={() => {
                setId("eI0iTRS0Ha8?si=Ti95SP5OYNNlgIub");
                setRainyDays("inactive");
                setBlue("inactive");
                setLoveMeAgain("inactive");
                setSlowDancing("active");
                setForUs("inactive");
              }}
            >
              Slow Dancing
            </a>
          </div>
          <div>
            <a
            className={forUs}
              onClick={() => {
                setId("LHtzWOLBdPc?si=5aXQhYeTMYISVW99");
                setRainyDays("inactive");
                setBlue("inactive");
                setLoveMeAgain("inactive");
                setSlowDancing("inactive");
                setForUs("active");
              }}
            >
              For Us
            </a>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
