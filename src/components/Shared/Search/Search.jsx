import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { GiSettingsKnobs } from "react-icons/gi";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./styles.scss";
import SearchDropdown from "./SearchDropdown";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Search = () => {
  const [showSearch, setShowSearch] = useState("DropdownSearch DisNone");
  return (
    <>
      <div className="search">
        <div className="search-icon">
          <IoMdSearch size={25} />
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search" />
        </div>
        <div className="search-icon">
          <GiSettingsKnobs
            onClick={() =>
              setShowSearch(
                showSearch === "DropdownSearch DisNone" ? "DropdownSearch DisBlock" : "DropdownSearch DisNone"
              )
            }
            size={25}
          />
        </div>
        <div className={showSearch}>
          <div className="row">
            <div className="col-4 pt-3 d-flex align-items-center">Type:</div>
            <div className="col-6">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "100%" }} size="small">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"11"}
                  label="Age">
                  <MenuItem value="">Any </MenuItem>
                  <MenuItem value={"Text"}>Text</MenuItem>
                  <MenuItem value={"Text"}>Text</MenuItem>
                  <MenuItem value={"Video"}>Video</MenuItem>
                  <MenuItem value={"images"}>images</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-4 pt-3 d-flex align-items-center">Context:</div>
            <div className="col-6">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "100%" }} size="small">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"11"}
                  label="Age">
                  <MenuItem value="">Any </MenuItem>
                  <MenuItem value={"Bookmark"}>Bookmark</MenuItem>
                  <MenuItem value={""}>Value Entry</MenuItem>
                  <MenuItem value={""}>Scan Doc</MenuItem>
                  <MenuItem value={""}>Tags</MenuItem>
                  <MenuItem value={""}>Notes</MenuItem>
                  <MenuItem value={""}>Collabration</MenuItem>
                  <MenuItem value={""}>Reminders</MenuItem>
                  <MenuItem value={""}>User Defined</MenuItem>
                  <MenuItem value={""}>Comment</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-4 pt-3 d-flex align-items-center">State:</div>
            <div className="col-6">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "100%" }} size="small">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"1"}
                  label="Age">
                  <MenuItem value="">Any </MenuItem>
                  <MenuItem value={"Bookmark"}>Active</MenuItem>
                  <MenuItem value={""}>Suspend</MenuItem>
                  <MenuItem value={""}>Delete</MenuItem>
                  <MenuItem value={""}>Cancel</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-4 pt-3 d-flex align-items-center">Owner:</div>
            <div className="col-6">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "100%" }} size="small">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"1"}
                  label="Age">
                  <MenuItem value="">Any </MenuItem>
                  <MenuItem value={"0"}>Gene</MenuItem>
                  <MenuItem value={"20"}>Alex</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-4 pt-3 d-flex align-items-center">Permission:</div>
            <div className="col-6">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "100%" }} size="small">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"11"}
                  label="Age">
                  <MenuItem value="1">Any </MenuItem>
                  <MenuItem value={"Bookmark"}>Read</MenuItem>
                  <MenuItem value={""}>Execute</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-4 pt-3 d-flex align-items-center">Repositories:</div>
            <div className="col-6">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "100%" }} size="small">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"11"}
                  label="Age">
                  <MenuItem value="1">Any </MenuItem>
                  <MenuItem value={"Bookmark"}>Aws Cloud</MenuItem>
                  <MenuItem value={""}>Google Cloud</MenuItem>
                  <MenuItem value={""}>Azure Cloud</MenuItem>
                  <MenuItem value={""}>FTP</MenuItem>
                  <MenuItem value={""}>SFTP</MenuItem>
                  <MenuItem value={""}>Local Drive</MenuItem>
                  <MenuItem value={""}>Network Drive</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-4 pt-3 d-flex align-items-center">Extentions:</div>
            <div className="col-6">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "100%" }} size="small">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"11"}
                  label="Age">
                  <MenuItem value="1">Any </MenuItem>
                  <MenuItem value={""}>Permission 1</MenuItem>
                  <MenuItem value={""}>Permission 2</MenuItem>
                  <MenuItem value={""}>Permission 3</MenuItem>
                  <MenuItem value={""}>Permission 4</MenuItem>
                  <MenuItem value={""}>Permission 5</MenuItem>
                  <MenuItem value={""}>Permission 6</MenuItem>
                  <MenuItem value={""}>Permission 7</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row">
            <div className="col-4 pt-3 d-flex align-items-center">Resource Size:</div>
            <div className="col-3">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "100%" }} size="small">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"11"}
                  label="Age">
                  <MenuItem value={""}>Greater Than</MenuItem>
                  <MenuItem value={""}>Less Than</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-2">
              <TextField id="standard-basic" className="pt-2" variant="standard" size="small" />
            </div>
            <div className="col-3">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: "100%" }} size="small">
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={"11"}
                  label="Age">
                  <MenuItem value="1">Any </MenuItem>
                  <MenuItem value={""}>Bit</MenuItem>
                  <MenuItem value={""}>Byte</MenuItem>
                  <MenuItem value={""}>MB</MenuItem>
                  <MenuItem value={""}>GB</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-4 pt-3 d-flex align-items-center">Date Created Between:</div>
            <div className="col-4">
              <TextField type="date" id="standard-basic" className="pt-2 w-100" variant="standard" size="small" />
            </div>
            <div className="col-4">
              <TextField type="date" id="standard-basic" className="pt-2 w-100" variant="standard" size="small" />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-4 pt-3 d-flex align-items-center">Last Updated Between:</div>
            <div className="col-4">
              <TextField type="date" id="standard-basic" className="pt-2 w-100" variant="standard" size="small" />
            </div>
            <div className="col-4">
              <TextField type="date" id="standard-basic" className="pt-2 w-100" variant="standard" size="small" />
            </div>
          </div>
          <SearchDropdown />
        </div>
      </div>
    </>
  );
};

export default Search;
