import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
    disableFilters: false,
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
    disableFilters: false,
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Country",
    accessor: "country",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
    disableFilters: true,
  },
];
