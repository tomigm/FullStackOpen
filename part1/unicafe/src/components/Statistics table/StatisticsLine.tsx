
  interface Props {
    text: string,
    value: number
  }
  
  const StatisticsLine: React.FC<Props> = ({text, value}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  };
    export default StatisticsLine