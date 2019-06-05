import React from 'react';

import styles from './form.module.css';
import GetFunc from '../getfunc/get';

//redux
import { fetchPosts } from '../../redux/actions/search-actions';
import {connect} from 'react-redux';
import { Form, Button, Input, FormFeedback, Jumbotron, Container } from 'reactstrap';


class FormMain extends React.Component {

  constructor(props){
    super(props)

    this.state={
        post: '',
        search: '',
        searchPosts: [],
        valid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //once props received and state are not equal component will update
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.posts && this.state.searchPosts !== nextProps.posts){
      return true
    }
    return false
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    this.setState({ valid: false })

    if(this.state.search.length){
      this.setState({ post: this.state.search, valid: true })

      //call action
      this.props.fetchPosts(this.state.search);
    }
    return null
  }

  static getDerivedStateFromProps(props, state){
    //check for the update of props from state
    if(props.posts && state.searchPosts !== props.posts){
      return {
        searchPosts: props.posts
      }
    }
    return null;
  }

  results(){


    if(this.state.searchPosts[0]){
      return <h4>Showing results for: {this.state.searchPosts[0]}</h4>
    }
    return null;
  }

  render(){
    return(
      <div>
        <Jumbotron fluid>
          <Container fluid style={{
              textAlign: "center"
            }}>
            <h1 className={styles.formHeader}>Wiki-Search</h1>

            <Form onSubmit={this.onSubmit} className={styles.gtForm}>
              <Input
                name="search"
                type="text"
                onChange={this.onChange}
                value={this.state.title}
                valid={this.state.valid}/>

              <FormFeedback
                valid={this.state.valid}>
                  Success!!!
              </FormFeedback>

              <Button
                type="submit"
                outline color= "primary"
                block={false}>
                  Search
              </Button>
            </Form>

          </Container>
        </Jumbotron>

        <div style={{ textAlign: "center"}}>
          {this.results()}
        </div>

        <div>
          <GetFunc data={this.state.searchPosts}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.search.results
})

export default connect(mapStateToProps, { fetchPosts })(FormMain);
