import React from 'react';
import "./SearchResultsView.css"

const SearchResultsView = () => {
  return (
    <div className='search-result-view'>
      <div className='search-results'>
        <div className='file-img'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/7/75/Southern_Life_in_Southern_Literature_text_page_322.jpg' alt='' style={{ height: "140px", width: "110px" }} />
        </div>
        <div className='search-result-details'>
          <div className='data-desc'>
            <p style={{ paddingLeft: "20px", color: "#7e57c6" }}>1 results found in file</p>
          </div>
          <div className='file-details'>
            <h4>2019-11-22_Exhibit_A-1_Dummy_Data_File_Name_John_Doe</h4>
            <p>File Path: <span style={{ color: "grey" }}>Titan/files/dummy/location/test</span></p>
            <p>Snippet: <span style={{ color: "grey" }}>Project Fire Protection and Detection</span></p>
          </div>
        </div>
      </div>
      <div className='file-type'>
        <p style={{
          borderRadius: "25px", background: "#7e57c6", width: "80px", height: "30px", color: "white", fontWeight: "bold"
        }}>docx</p>
        <div className='page-count'>
          <p>Page No. <span style={{ color: "#7e57c6", fontWeight: "bold" }}>12</span></p>
        </div>
      </div>
    </div>

  );
};

export default SearchResultsView;