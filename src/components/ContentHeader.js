import PropTypes from 'prop-types';
import { Divider, Typography } from "antd"

const { Title, Text } = Typography


const ContentHeader = ({title, text}) => {
  return (
    <>
      <Title level={2} >{title}</Title>
      <Text>{text}</Text>
      <Divider />
    </>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default ContentHeader
