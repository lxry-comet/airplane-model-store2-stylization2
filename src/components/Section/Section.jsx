import PropTypes from 'prop-types';
import css from "./Section.module.css"; //! CSS-модулі

function Section({ title, children }) {
  return (
    <section>
      {title
        &&
        <h2
        className={css.titleLugrasimoBold}

        //? className={title && <h2 className={`${css.title} ${css.lugrasimoBold}`}
        >
          {title}
        </h2>} 
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;