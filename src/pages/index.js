import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section id="interactive" className="cpc-slide full">
          <section className="interactive-points" id="interactive-1">
            <img className="static" src="/img/renderings/vistagrande-Watercolor.jpg" alt="Map of London" />
            <div className="backgrounds">
              <div
                className="background__element"
                style={{
                  backgroundImage: `url(/img/renderings/VG_lounge.jpg)`,
                }}
              >
              </div>
              
                
            </div>
            <svg className="points" viewBox="0 0 1885 1080" width="100%" height="100%">
              <path className="point" d="M1471.3,255L1471.3,255c-7.1-7.1-18.6-7.1-25.7,0l0,0c-6.4,6.4-7.1,18.4-1.7,25.7l14.5,21l14.5-21 C1478.4,273.5,1477.7,261.4,1471.3,255z"/>

            </svg>
            <div className="points-tooltips">
              <div className="point-tooltip">
                <h2 className="point-tooltip__title">Bigger Spaces</h2>
                <p className="point-tooltip__description">Three stories, six micro-restaurants, a variety of seating, and large outdoor patio.</p>
              </div>
            </div>
            <div className="points-content">
              <div className="point-content">
                <h3 className="point-content__title">Bigger Spaces</h3>
                <p className="point-content__subtitle"></p>
                <p className="point-content__text">
                The new three-story complex will feature both residential and retail dining options and offer the thriving campus community much need space to grab a meal or a place to meet with friends. The new location will consist of six different micro-restaurants, allowing for a wide variety of dining options that will help to accommodate the increasing number of students and faculty at Cal Poly. The facility will feature an open floor plan with a variety of seating and lounge options, including a large outdoor patio space. Guided by President Armstrong’s Vision 2022, the new Vista Grande Dining Complex will be a vital resource for Cal Poly students now and in the future.
                </p>
              </div>
            </div>
          </section>
          <header>
            <h1 className="section-title">Building a better dining experience.</h1>
          </header>
          <div className="bouncing-scroll white">
            <a href="#intro">
              <div className="container">
                <div className="chevron">
                </div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </a>
          </div>
          
        </section>

        <section id="intro" className="cpc-slide full">
            <img src="/img/renderings/vistigrande-drawing.png" alt="vista grande"/>

            <header>
              <h2>Vista Grande Dining Complex</h2>
              <p className="intro">At the end of the 2015-16 academic year, Cal Poly Corporation’s master plan for Campus Dining began underway with the development of a new state-of-the-art dining complex. Conceived to address the growing needs of the campus for on-trend dining options, this capital project was developed based on research and analysis of the latest culinary concepts and campus community input. The new three-story dining complex will feature six micro-restaurants, increased seating and lounge space and a variety of exhibition-style food choices.  All of this will be encompassed in a modern building that boasts LEED certification for sustainable, resource-efficient design. With an expected completion time of just over two years and a cost of approximately $30 million, Campus Dining plans to open the new Vista Grande Dining Complex in fall of 2019.</p>
            </header>
        </section>
        <section id="livestream" className="cpc-slide full">
          <h1>Building a better dining experience in real time.</h1>
          <div>
            <a className="button button-inverse button-large" href="https://www.youtube.com/user/CalPoly/live"><i className="fa fa-youtube"></i> View the livestream</a>
          </div>
        </section>
        <section id="transition" className="cpc-slide full">
          <div className="container">
            <header>
              <h2>The transition plan</h2>
              <p className="intro">With Vista Grande Dining Complex under construction, Campus Dining updated several current dining locations as a part of its transition plan. These updates focused on renovating current facilities to increase dining accessibility on campus and providing a variety of food options to satisfy the campus’ varied palates. In addition to updating venues, Campus Dining reviewed hours of operation to ensure that it was meeting the needs of faculty, students and staff while Vista Grande Dining Complex is being built.</p>
            </header>
            <div className="three-card-grid">
              <p>Transistion copy</p>
            </div>
          </div>
        </section>
        <section id="news"className="cpc-slide">
          <div className="container">
            <header className="white">
              <h2>News</h2>
              <p className="intro">Here are the latest news about the Vista Grande Dining Complex from Cal Poly Corporation.</p>
            </header>
            <div class="three-card-grid">
              {posts
                .map(({ node: post }) => (
                  <div
                    className="card"
                    style={{ border: '1px solid #333', padding: '2em 4em' }}
                    key={post.id}
                  >
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <script
              dangerouslySetInnerHTML={{
                  __html: `
                  (function() {
                    new PointsMap(document.querySelector('#interactive-1'));
                  })();
                  `
              }}
          />
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
