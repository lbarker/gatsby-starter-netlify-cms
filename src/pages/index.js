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
        <div class="standard-devider"><svg class="devider transparent-white" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="30" viewBox="0 0 100 102" preserveAspectRatio="none"><path d="M0 0 L50 100 L100 0 Z"></path></svg></div>
        <section id="livestream" className="cpc-slide full">
          <h1>Building a better dining experience in real time.</h1>
          <div>
            <a className="button button-inverse button-large" href="https://www.youtube.com/user/CalPoly/live"><i className="fa fa-youtube"></i> View the livestream</a>
          </div>
        </section>
        <div className="complex-devider"><svg className="devider transparent-white left" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="30" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 L50 100 L0 100 Z"></path></svg> <svg class="devider transparent-white right" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="30" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M100 0 L50 100 L100 100 Z"></path></svg></div>
        <section id="transition" className="cpc-slide full">
          <div className="container">
            <header>
              <h2>The transition plan</h2>
              <p className="intro">With Vista Grande Dining Complex under construction, Campus Dining updated several current dining locations as a part of its transition plan. These updates focused on renovating current facilities to increase dining accessibility on campus and providing a variety of food options to satisfy the campus’ varied palates. In addition to updating venues, Campus Dining reviewed hours of operation to ensure that it was meeting the needs of faculty, students and staff while Vista Grande Dining Complex is being built.</p>
            </header>
            <div className="three-card-grid">
              <div className="card">
                <img src="/img/newdiningcomplex/1333_Trucks-thumb.png" alt=""/>
                <div className="description">
                  <h3>Food Trucks</h3>
                  <p>Campus Dining added two new food trucks, Central Coaster and Starbucks, along with updating their existing mobile food venue, Curbside Grill.</p>
                </div>
              </div>
              <div className="card">
                <img src="/img/newdiningcomplex/805KitchenThumb_1.jpg" alt=""/>
                <div className="description">
                  <h3>Late Night Hours</h3>
                  <p>805 Kitchen, Cal Poly’s residential hall, has extended its hours for those studying late. This all-you-care-to-eat venue will be open to 1 a.m. and feature a variety of delicious, sustainable and nutritious options.</p>
                </div>
              </div>
              <div className="card">
                <img src="/img/newdiningcomplex/1333_CM_Ext-thumb.png" alt=""/>
                <div className="description">
                  <h3>Neighborhood Markets</h3>
                  <p>Campus Dining updated two of its markets, Campus Market and Village Market and added a new one, Grand Avenue Market. All are conveniently located and provide the essentials for campus life.</p>
                </div>
              </div>
            </div></div>
          </section>
          <div class="standard-devider"><svg class="devider white-green" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="30" viewBox="0 0 100 102" preserveAspectRatio="none"><path d="M0 0 L50 100 L100 0 Z"></path></svg></div>
        <section id="news"className="cpc-slide">
          <div className="container">
            <header className="white">
              <h2>News</h2>
              <p className="intro">Here are the latest news about the Vista Grande Dining Complex from Cal Poly Corporation.</p>
            </header>
            <div className="three-card-grid">
              {posts
                .map(({ node: post }) => (
                  <div
                    className="card"
                    key={post.id}
                  >
                    <p className="date">{post.frontmatter.date}</p>
                    <div className="description">
                      <h3>
                        <Link className="has-text-primary" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                      </h3>
                      <p>
                        {post.excerpt}
                        <br />
                      </p>
                      <Link className="button" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </div>
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
