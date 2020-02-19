import Counter from "./Counter";
import { connect } from "react-redux";
import { increment, decrement } from "../../redux/counter/counterActions";

const mapStateToProps = state => ({ defaultValue: state.counter });

export default connect(mapStateToProps, { increment, decrement })(Counter);
