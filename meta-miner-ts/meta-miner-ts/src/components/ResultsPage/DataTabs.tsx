import React, { useState, useEffect } from 'react';
import SearchResultsView from "./SearchResultsView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faFilePdf, faFileWord } from "@fortawesome/free-solid-svg-icons";

import "./DataTabs.scss";

interface dataTabsProps {
  backGroundValue: string;
}

const DataTabs: React.FunctionComponent<dataTabsProps> = (props: dataTabsProps) => {
  const [checked, setChecked] = useState(true)
  console.log("BACKGROUND VALUE in DATA TABS::::> ", props.backGroundValue);
  useEffect(() => {
    props.backGroundValue === 'light-theme'
      ? document.getElementsByClassName('tab')[0]
        ? (Array.from(document.getElementsByClassName('tab')).forEach(el => {
          return el.className = 'tab'
        }))
        : (Array.from(document.getElementsByClassName(
          'tab-dark'
        )).forEach(el => {
          return el.className = 'tab'
        }))
      : document.getElementsByClassName('tab')[0]
        ? (Array.from(document.getElementsByClassName('tab')).forEach(el => {
          return el.className = 'tab-dark'
        }))
        : (Array.from(document.getElementsByClassName('tab-dark')).forEach(el => {
          return el.className = 'tab-dark'
        }))

    props.backGroundValue === 'light-theme'
      ? document.getElementsByClassName('tab__content')[0]
        ? (Array.from(document.getElementsByClassName('tab__content')).forEach(el => {
          return el.className = 'tab__content'
        }))
        : (Array.from(document.getElementsByClassName(
          'tab__content-dark'
        )).forEach(el => {
          return el.className = 'tab__content'
        }))
      : document.getElementsByClassName('tab__content')[0]
        ? (Array.from(document.getElementsByClassName('tab__content')).forEach(el => {
          return el.className = 'tab__content-dark'
        }))
        : (Array.from(document.getElementsByClassName('tab__content-dark')).forEach(el => {
          return el.className = 'tab__content-dark'
        }))
  }, [props.backGroundValue])


  return (
    <div className="tab-wrap">
      <input type="radio" id="tab1" name="tabGroup1" className="tab" checked={checked} onChange={() => { setChecked(!checked) }} />
      <label htmlFor="tab1">
        <span style={{ display: "flex" }}>
          <p style={{ paddingRight: "8px" }}>All</p>
          <p style={{
            borderRadius: "20px", background: "#0e1118", paddingTop: "1px", width: "20px", height: "20px", color: "white", marginTop: "auto", fontSize: "12px",
          }}>3</p>
        </span>
      </label>
      <input type="radio" id="tab2" name="tabGroup1" className="tab" onChange={() => { setChecked(false) }} />
      <label htmlFor="tab2">
        <span style={{ display: "flex" }}>
          <p style={{ paddingRight: "8px" }}><FontAwesomeIcon icon={faFileWord} style={{ color: "#beabe2" }} /> .docx</p>
          <p style={{
            borderRadius: "20px", background: "#0e1118", paddingTop: "1px", width: "20px", height: "20px", color: "white", marginTop: "auto", fontSize: "12px",
          }}>3</p>
        </span>
      </label>
      <input type="radio" id="tab3" name="tabGroup1" className="tab" onChange={() => { setChecked(false) }} />
      <label htmlFor="tab3">
        <span style={{ display: "flex" }}>
          <p style={{ paddingRight: "8px" }}><FontAwesomeIcon icon={faFilePdf} style={{ color: "#beabe2" }} /> .pdf</p>
          <p style={{
            borderRadius: "20px", background: "#0e1118", paddingTop: "1px", width: "20px", height: "20px", color: "white", marginTop: "auto", fontSize: "12px",
          }}>0</p>
        </span>
      </label>
      <div className='extra-btns'>
        <a style={{ color: "#7e57c6", fontWeight: "bold", paddingTop: "40px", paddingRight: "10px" }} href="www.google.com" >Unsubscribe</a>
        <p style={{ color: "#424548", fontWeight: "bold", paddingTop: "25px", paddingRight: "15px" }}>3 Results Found</p>
        <p style={{ color: "#424548", fontWeight: "bold", paddingTop: "25px", paddingRight: "15px" }}>1-10 of 3</p>
        <p style={{
          borderRadius: "25px", background: "#0e1118", paddingTop: "2px", width: "80px", height: "30px", color: "white", marginTop: "auto"
        }}><FontAwesomeIcon icon={faAngleLeft} style={{ color: "#fff", paddingRight: "20px" }} />1<FontAwesomeIcon icon={faAngleRight} style={{ color: "#fff", paddingLeft: "20px" }} /></p>
      </div>
      <div className="tab__content">
        <SearchResultsView backGroundValue={props.backGroundValue} />
      </div>
      <div className="tab__content">
        <SearchResultsView backGroundValue={props.backGroundValue} />
      </div>
      <div className="tab__content pdf">
        <SearchResultsView backGroundValue={props.backGroundValue} />
      </div>
    </div>
  );
};

export default DataTabs;