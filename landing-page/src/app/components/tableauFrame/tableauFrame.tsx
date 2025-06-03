type TableauFrameProps = {
  feature: string;
  sharednotes: string;
  app1: string;
  app2: string;
};
export default function TableauFrame({
  feature,
  sharednotes,
  app1,
  app2,
}: TableauFrameProps) {
  return (
    <tr>
      <th>{feature}</th>
      <td>{sharednotes}</td>
      <td>{app1}</td>
      <td>{app2}</td>
    </tr>
  );
}
