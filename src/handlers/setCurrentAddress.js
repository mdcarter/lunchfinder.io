export default (context, address) => {
  context.setState({
    address: address,
    error: null
  });
};
