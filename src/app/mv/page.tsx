"use client";
import { Suspense, useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Loading from "../loading";
import VideoBG from "@/components/VideoBG";
import VideoFrame from "@/components/VideoFrame";

export default function MV() {
  const size = useWindowSize();
  const [id, setId] = useState<string>("yTsINmrAK4I?si=d1opH5UDOChlCAn_");
  const [rainyDays, setRainyDays] = useState<string>("active");
  const [blue, setBlue] = useState<string>("inactive");
  const [loveMeAgain, setLoveMeAgain] = useState<string>("inactive");
  const [slowDancing, setSlowDancing] = useState<string>("inactive");
  const [forUs, setForUs] = useState<string>("inactive");

  useEffect(() => {
    }, [size.width]);

  return (
    <Suspense fallback={<Loading />}>
      <VideoBG videoName="background.mp4" />
      {size.width! > 620 ? (
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
              <a
                className={blue}
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
      ) : (
        <div id="centerVideo">
          <VideoFrame id="yTsINmrAK4I?si=d1opH5UDOChlCAn_" />
          <p>Rainy Days</p>
          <VideoFrame id="sIh9_cNCwPc?si=pAuF6CNVDhifi-1L" />
          <p>Blue</p>
          <VideoFrame id="HYzyRHAHJl8?si=Joh4oFKx0J7pyyFX" />
          <p>Love Me Again</p>
          <VideoFrame id="eI0iTRS0Ha8?si=Ti95SP5OYNNlgIub" />
          <p>Slow Dancing</p>
          <VideoFrame id="LHtzWOLBdPc?si=5aXQhYeTMYISVW99" />
          <p>For Us</p>
        </div>
      )}
    </Suspense>
  );
}
