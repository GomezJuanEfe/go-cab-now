import './FooterBlog.scss';

const FooterBlog = ({ img, title, body }) => (
  <div className="footer-blog__media">

    <div className="footer-blog__media-img">
      <img src={img} alt={`${title}`} />
    </div>

    <div className="footer-blog__media-body">
      <h5>{title}</h5>
      <p>{body}</p>
    </div>

  </div>
);

export default FooterBlog;
