import { getAllPayment } from "@/utils/api/payment";
import { FaDollarSign, FaProductHunt, FaSalesforce } from "react-icons/fa";
import StatsCard from "./StatsCard";

const Stats = async ({ data }) => {
  const payments = await getAllPayment();

  const totalProduct = data?.length;
  const totalInvest = data?.reduce(
    (total, item) => total + Number(item?.price),
    0
  );
  const totalSales = payments?.data?.length;
  const totalRevenue = payments?.data?.reduce(
    (total, item) => total + Number(item?.total),
    0
  );

  const statList = [
    {
      id: 1,
      title: "Total Product",
      icon: <FaProductHunt />,
      income: totalProduct,
    },
    {
      id: 2,
      title: "Total Invest",
      icon: <FaDollarSign />,
      income: totalInvest,
    },
    {
      id: 3,
      title: "Total Sales",
      icon: <FaSalesforce />,
      income: totalSales,
    },
    {
      id: 4,
      title: "Total Revenue",
      icon: <FaDollarSign />,
      income: totalRevenue,
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2">
      {statList.map((e) => (
        <StatsCard
          key={e.id}
          title={e.title}
          days={"Last 30 Days"}
          income={e.income}
          icon={e.icon}
        />
      ))}
    </section>
  );
};

export default Stats;
