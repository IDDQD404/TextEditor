import React from "react";
import "./Icon.css";

import {
  BsFileEarmarkFill,
  BsUpload,
  BsDownload,
  BsZoomIn,
  BsZoomOut,
} from "react-icons/bs";

export default function Icon(args) {
  return (
    <div className="Icon">
      {args.type === "newOne" && (
        <div className="IconBody">
          <BsFileEarmarkFill size={100} />
        </div>
      )}

      {args.type === "newOne" && (
        <text className="IconText">Create new one?</text>
      )}

      {args.type === "uploadOne" && (
        <div className="IconBody">
          <BsDownload size={100} />
        </div>
      )}

      {args.type === "uploadOne" && (
        <text className="IconText">Upload new one?</text>
      )}

      {args.type === "downloadOne" && (
        <div className="IconBody">
          <BsUpload size={100} />
        </div>
      )}

      {args.type === "downloadOne" && (
        <text className="IconText">Download this one?</text>
      )}

      {args.type === "textZoomIn" && (
        <div className="IconBody">
          <BsZoomIn size={100} />
        </div>
      )}

      {args.type === "textZoomIn" && (
        <text className="IconText">Increase text size?</text>
      )}

      {args.type === "textZoomOut" && (
        <div className="IconBody">
          <BsZoomOut size={100} />
        </div>
      )}

      {args.type === "textZoomOut" && (
        <text className="IconText">Decrease text size?</text>
      )}
    </div>

    /* 
      <div className="IconBody">
        Delete this one - optional/copy of create new one 
        <BsTrashFill size={100} />
        <text className="IconText">Create new one?</text>
      </div>
       */

    /* Just put everything in one and create logic in ui/app component */
  );
}
