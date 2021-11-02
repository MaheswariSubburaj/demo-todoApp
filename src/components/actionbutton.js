import context from '../core/context';
import editButton from './editButton';
import addbutton from './addbutton';

const ActionButton = () => (context.state.editing ? editButton() : addbutton());

export default ActionButton;
