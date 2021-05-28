import * as PropTypes from 'prop-types'

interface Props {
  title: string
  price: number
}
// same as
const propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

type MyComponentProps = PropTypes.InferProps<Props>
type MyComponentProps1 = PropTypes.InferProps<typeof propTypes>

// this is not used for now, I'm just experimenting
const article: React.FC<Props> = ({
  /* const Article = ({ */
  title,
  price,
}: MyComponentProps): React.ReactElement => (
  <div className='article'>
    <h1>{title}</h1>
    <span>Priced at (incl VAT): {price * 1.2}</span>
  </div>
)

article.propTypes = propTypes

export default article
