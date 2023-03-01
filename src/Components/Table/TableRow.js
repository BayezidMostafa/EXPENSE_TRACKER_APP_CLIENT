import React from "react";

const TableRow = ({ data }) => {
  return (
    <tr>
      <td className="text-dark py-3 px-2 text-center text-base font-medium">
        <span className="flex items-center gap-3">
          <span>
            <img src={data?.logo} className="w-[56px] h-[56px]" alt="" />
          </span>
          <span>{data?.title}</span>
        </span>
      </td>
      <td className="text-green-500 py-3 px-2 text-center text-base font-medium">
        Successful
      </td>
      <td className="text-dark py-3 px-2 text-center text-base font-medium">
        {data?.date}
      </td>
      <td className="text-dark py-3 px-2 text-center text-base font-medium">
        ${data?.amount}
      </td>
    </tr>
  );
};

export default TableRow;
