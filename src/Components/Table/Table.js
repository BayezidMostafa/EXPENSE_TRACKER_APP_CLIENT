import React from "react";
import RedHome from "../../Assets/Logo/home.svg";
import Cart from "../../Assets/Logo/cart.svg";
import GreenCar from "../../Assets/Logo/green-car.svg";
import TableRow from "./TableRow";

const Table = () => {
  const tableData = [
    {
      logo: RedHome,
      title: "Home Electricity Bill",
      date: "27/10/2021",
      amount: "540",
    },
    {
      logo: Cart,
      title: "Festival Shopping",
      date: "27/10/2021",
      amount: "540",
    },
    {
      logo: GreenCar,
      title: "Car Services",
      date: "27/10/2021",
      amount: "540",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="text-black">
                <tr className="bg-primary">
                  <th className="w-1/6 min-w-[160px] text-left py-2 px-3 text-base font-semibold text-[#9B9B9B] lg:py-3 lg:px-4">
                    Categories Name
                  </th>
                  <th className="w-1/6 min-w-[160px] text-center py-2 px-3 text-base font-semibold text-[#9B9B9B] lg:py-3 lg:px-4">
                    Transaction
                  </th>
                  <th className="w-1/6 min-w-[160px] text-center py-2 px-3 text-base font-semibold text-[#9B9B9B] lg:py-3 lg:px-4">
                    Date
                  </th>
                  <th className="w-1/6 min-w-[160px] text-center py-2 px-3 text-base font-semibold text-[#9B9B9B] lg:py-3 lg:px-4">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <TableRow key={index} data={data} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
