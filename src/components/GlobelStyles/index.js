import PropTypes from 'prop-types';
import './GlobelStyles.scss';

function GlobelStyle({ children }) {
    return children;
}

GlobelStyle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobelStyle;
