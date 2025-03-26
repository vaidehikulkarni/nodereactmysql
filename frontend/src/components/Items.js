import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setItems, setStatus, setError } from "../redux/slices/itemsSlice";
import { AgGridReact } from "ag-grid-react";
// import 'ag-grid-community/styles/ag-grid.css';
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

const Items = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.items);
  // Register all Community features
  ModuleRegistry.registerModules([AllCommunityModule]);
  console.log("items", items);

  const columnDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setStatus("loading"));
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
        dispatch(setItems(response.data));
        dispatch(setStatus("succeeded"));
      } catch (err) {
        dispatch(setError(err.toString()));
        dispatch(setStatus("failed"));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <AgGridReact
          columnDefs={columnDefs}
          rowData={items}
          domLayout="autoHeight"
          pagination= {true}
          paginationPageSize={10}
        />
      )}
    </div>
  );
};

export default Items;
