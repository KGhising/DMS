import React, {useEffect} from "react";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import URLSearchParams from "url-search-params";
import MomentUtils from "@date-io/moment";
import {MuiPickersUtilsProvider} from "material-ui-pickers";
import {Redirect, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IntlProvider} from "react-intl";
import "assets/vendors/style";
import indigoTheme from "./themes/indigoTheme";
import AppLocale from "../lngProvider";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {setInitUrl} from "../actions/Auth";
import {setDarkTheme, setThemeColor} from "../actions/Setting";
import AppLayout from "./AppLayout";

const RestrictedRoute = ({component: Component, token, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      token
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: {from: props.location}
          }}
        />}
  />;

const App = (props) => {
  const dispatch = useDispatch();
  const {themeColor, darkTheme, locale, isDirectionRTL} = useSelector(({settings}) => settings);
  const {token, initURL} = useSelector(({auth}) => auth);
  const isDarkTheme = darkTheme;
  const {match, location} = props;

  useEffect(() => {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    if (initURL === '') {
      dispatch(setInitUrl(props.history.location.pathname));
    }
    const params = new URLSearchParams(props.location.search);
    if (params.has("theme-name")) {
      dispatch(setThemeColor(params.get('theme-name')));
    }
    if (params.has("dark-theme")) {
      dispatch(setDarkTheme());
    }
  }, [dispatch, initURL, props.history.location.pathname, props.location.search]);

  let applyTheme = createMuiTheme(indigoTheme);

  if (location.pathname === '/') {
    if (token === null) {
      return (<Redirect to={'/signin'}/>);
    } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
      return (<Redirect to={'/app/sample-page'}/>);
    } else {
      return (<Redirect to={initURL}/>);
    }
  }
  const currentAppLocale = AppLocale[locale.locale];
  console.log("in indexf file")
  return (
    <ThemeProvider theme={applyTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}>
          {/* <RTL> */}
            <div className="app-main">
              <Switch>
                <RestrictedRoute path={`${match.url}app`} token={token}
                                 component={AppLayout}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/signup' component={SignUp}/>
                {/*<Route*/}
                {/*  component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>*/}
              </Switch>
            </div>
          {/* </RTL> */}
        </IntlProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};


export default App;
