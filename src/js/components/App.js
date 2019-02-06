import React, {
	Component
} from 'react';
import Home from '../containers/Home'
import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
    font-family: 'PT Sans Caption', sans-serif;
    src: url("https://fonts.googleapis.com/css?family=PT+Sans+Caption:700");
  }

  body {
    margin: 0;
    font-family: 'PT Sans Caption', sans-serif;
  }
`
class App extends Component {
	render() {
		return ( 
			<div>
				<Home/>
			</div>
		)
	}
}

export default App;