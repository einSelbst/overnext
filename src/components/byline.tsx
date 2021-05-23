const Byline = ({ author }: { author: string }): JSX.Element => (
  <>
    <div className='byline'>By {author}</div>
    <style jsx>{`
      .byline {
        color: green;
        font-weight: bolder;
      }
    `}</style>
  </>
)

export default Byline
