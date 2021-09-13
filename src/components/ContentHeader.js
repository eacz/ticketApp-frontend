import PropTypes from 'prop-types';
import { Divider, Typography } from "antd"

const { Title, Text } = Typography


const ContentHeader = ({title, text, divider = true}) => {
  return (
    <>
      <Title level={2} >{title}</Title>
      {text && <Text>{text}</Text>}
      {divider && <Divider />}
    </>
  )
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  divider: PropTypes.bool,
}

export default ContentHeader
