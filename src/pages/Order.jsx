import PaperIcon from "../components/icons/PaperIcon";
import "../styles/order.css";

export default function Order() {
  return (
    <div className="pages order">
      <div className="page_title">
        <PaperIcon />
        Захиалгууд
      </div>
      <table>
        <thead>
          <tr>
            <td>Захиалга No</td>
            <td>Огноо</td>
            <td>Утас</td>
            <td>И-мэйл</td>
            <td>Хаяг</td>
            <td>Тоо</td>
            <td>Нийт дүн ₮</td>
            <td>Төлбөр</td>
            <td>Статус</td>
            <td></td>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </table>
    </div>
  );
}
