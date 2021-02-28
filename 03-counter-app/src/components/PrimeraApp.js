import PropTypes from 'prop-types';

const PrimeraApp = ({name, lastName}) => {
  return (
    <>
      <h3 className="my-5 text-center">Hello, your name is: {name}</h3>
      <p>{lastName}</p>
    </>
  )
}

PrimeraApp.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  lastName: "stark"
}

export default PrimeraApp;
