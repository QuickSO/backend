(self["webpackChunkquickso_cms"] = self["webpackChunkquickso_cms"] || []).push([[6378],{

/***/ 44081:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar.json": [
		41830,
		9785
	],
	"./ca.json": [
		49637,
		5994
	],
	"./cs.json": [
		51771,
		1500
	],
	"./de.json": [
		95070,
		9409
	],
	"./dk.json": [
		74920,
		5543
	],
	"./en.json": [
		39334,
		6969
	],
	"./es.json": [
		34349,
		9146
	],
	"./fr.json": [
		48373,
		5826
	],
	"./gu.json": [
		16389,
		9994
	],
	"./he.json": [
		62530,
		7837
	],
	"./hi.json": [
		36854,
		9865
	],
	"./hu.json": [
		48978,
		6669
	],
	"./id.json": [
		64960,
		9823
	],
	"./it.json": [
		88912,
		8159
	],
	"./ja.json": [
		29220,
		8363
	],
	"./ko.json": [
		21575,
		2800
	],
	"./ml.json": [
		5916,
		2355
	],
	"./ms.json": [
		77189,
		9714
	],
	"./nl.json": [
		73735,
		424
	],
	"./no.json": [
		30374,
		7897
	],
	"./pl.json": [
		48845,
		2634
	],
	"./pt-BR.json": [
		46304,
		6815
	],
	"./pt.json": [
		22133,
		1490
	],
	"./ru.json": [
		31248,
		4191
	],
	"./sa.json": [
		87797,
		2218
	],
	"./sk.json": [
		34371,
		6836
	],
	"./sv.json": [
		59108,
		9683
	],
	"./th.json": [
		5237,
		3522
	],
	"./tr.json": [
		10419,
		28
	],
	"./uk.json": [
		73413,
		2834
	],
	"./vi.json": [
		22432,
		7935
	],
	"./zh-Hans.json": [
		98590,
		7929
	],
	"./zh.json": [
		73519,
		864
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 44081;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 26003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ utils_forms)
});

// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var lib = __webpack_require__(68561);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(29434);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(89520);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(47932);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(10661);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(10848);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(76686);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(60245);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(69668);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(63760);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.cjs.production.min.js
var formik_cjs_production_min = __webpack_require__(25221);
// EXTERNAL MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/index.js + 1 modules
var UnauthenticatedLayout = __webpack_require__(32420);
// EXTERNAL MODULE: ./.cache/admin/src/components/UnauthenticatedLogo/index.js
var UnauthenticatedLogo = __webpack_require__(94550);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/ForgotPassword/index.js














const ForgotPassword = ({ onSubmit, schema }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(
    formik_cjs_production_min.Formik,
    {
      enableReinitialize: true,
      initialValues: {
        email: ""
      },
      onSubmit,
      validationSchema: schema,
      validateOnChange: false
    },
    ({ values, errors, handleChange }) => /* @__PURE__ */ react.createElement(build.Form, { noValidate: true }, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 6, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography.Typography, { as: "h1", variant: "alpha" }, formatMessage({
      id: "Auth.form.button.password-recovery",
      defaultMessage: "Password Recovery"
    }))), errors.errorMessage && /* @__PURE__ */ react.createElement(
      Typography.Typography,
      {
        id: "global-form-error",
        role: "alert",
        tabIndex: -1,
        textColor: "danger600"
      },
      formatMessage({
        id: errors.errorMessage,
        defaultMessage: "An error occurred"
      })
    )), /* @__PURE__ */ react.createElement(Stack.Stack, { spacing: 6 }, /* @__PURE__ */ react.createElement(
      TextInput.TextInput,
      {
        error: errors.email ? formatMessage({
          id: errors.email,
          defaultMessage: "This email is invalid."
        }) : "",
        value: values.email,
        onChange: handleChange,
        label: formatMessage({ id: "Auth.form.email.label", defaultMessage: "Email" }),
        placeholder: formatMessage({
          id: "Auth.form.email.placeholder",
          defaultMessage: "kai@doe.com"
        }),
        name: "email",
        required: true
      }
    ), /* @__PURE__ */ react.createElement(Button.Button, { type: "submit", fullWidth: true }, formatMessage({
      id: "Auth.form.button.forgot-password",
      defaultMessage: "Send Email"
    }))))
  )), /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(build.Link, { to: "/auth/login" }, formatMessage({ id: "Auth.link.ready", defaultMessage: "Ready to sign in?" }))))));
};
ForgotPassword.defaultProps = {
  onSubmit: (e) => e.preventDefault()
};
ForgotPassword.propTypes = {
  onSubmit: (prop_types_default()).func,
  schema: prop_types_default().shape({
    type: (prop_types_default()).string.isRequired
  }).isRequired
};
/* harmony default export */ const components_ForgotPassword = (ForgotPassword);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/ForgotPasswordSuccess/index.js









const ForgotPasswordSuccess = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 6, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography.Typography, { as: "h1", variant: "alpha" }, formatMessage({
    id: "app.containers.AuthPage.ForgotPasswordSuccess.title",
    defaultMessage: "Email sent"
  }))), /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: "app.containers.AuthPage.ForgotPasswordSuccess.text.email",
    defaultMessage: "It can take a few minutes to receive your password recovery link."
  })), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: "app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin",
    defaultMessage: "If you do not receive this link, please contact your administrator."
  }))))), /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(build.Link, { to: "/auth/login" }, formatMessage({ id: "Auth.link.signin", defaultMessage: "Sign in" }))))));
};
/* harmony default export */ const components_ForgotPasswordSuccess = (ForgotPasswordSuccess);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/Oops/index.js









const Oops = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const query = (0,build.useQuery)();
  const message = query.get("info") || formatMessage({
    id: "Auth.components.Oops.text",
    defaultMessage: "Your account has been suspended."
  });
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 6, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography.Typography, { as: "h1", variant: "alpha" }, formatMessage({ id: "Auth.components.Oops.title", defaultMessage: "Oops..." }))), /* @__PURE__ */ react.createElement(Typography.Typography, null, message), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: "Auth.components.Oops.text.admin",
    defaultMessage: "If this is a mistake, please contact your administrator."
  }))))), /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(build.Link, { to: "/auth/login" }, formatMessage({ id: "Auth.link.signin", defaultMessage: "Sign in" }))))));
};
/* harmony default export */ const components_Oops = (Oops);

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(8162);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(58156);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(90179);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(79296);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Checkbox.js
var Checkbox = __webpack_require__(36172);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(54109);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/EyeStriked.js
var EyeStriked = __webpack_require__(62994);
var EyeStriked_default = /*#__PURE__*/__webpack_require__.n(EyeStriked);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Eye.js
var Eye = __webpack_require__(55966);
var Eye_default = /*#__PURE__*/__webpack_require__.n(Eye);
// EXTERNAL MODULE: ./.cache/admin/src/pages/AuthPage/components/FieldActionWrapper/index.js
var FieldActionWrapper = __webpack_require__(19175);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/Register/index.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
























const CenteredBox = (0,styled_components_browser_cjs["default"])((0,Box.Box))`
  text-align: center;
`;
const A = styled_components_browser_cjs["default"].a`
  color: ${({ theme }) => theme.colors.primary600};
`;
const PasswordInput = (0,styled_components_browser_cjs["default"])((0,TextInput.TextInput))`
  ::-ms-reveal {
    display: none;
  }
`;
const Register = ({ authType, fieldsToDisable, noSignin, onSubmit, schema }) => {
  const toggleNotification = (0,build.useNotification)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const [passwordShown, setPasswordShown] = (0,react.useState)(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = (0,react.useState)(false);
  const [submitCount, setSubmitCount] = (0,react.useState)(0);
  const [userInfo, setUserInfo] = (0,react.useState)({});
  const { trackUsage } = (0,build.useTracking)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const query = (0,build.useQuery)();
  const registrationToken = query.get("registrationToken");
  (0,react.useEffect)(() => {
    if (registrationToken) {
      const getData = () => __async(void 0, null, function* () {
        try {
          const {
            data: { data }
          } = yield axios_default().get(
            `${strapi.backendURL}/admin/registration-info?registrationToken=${registrationToken}`
          );
          if (data) {
            setUserInfo(data);
          }
        } catch (err) {
          const errorMessage = get_default()(err, ["response", "data", "message"], "An error occurred");
          toggleNotification({
            type: "warning",
            message: errorMessage
          });
          push(`/auth/oops?info=${encodeURIComponent(errorMessage)}`);
        }
      });
      getData();
    }
  }, [registrationToken]);
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(
    formik_cjs_production_min.Formik,
    {
      enableReinitialize: true,
      initialValues: {
        firstname: userInfo.firstname || "",
        lastname: userInfo.lastname || "",
        email: userInfo.email || "",
        password: "",
        confirmPassword: "",
        registrationToken: registrationToken || void 0,
        news: false
      },
      onSubmit: (data, formik) => __async(void 0, null, function* () {
        try {
          yield schema.validate(data, { abortEarly: false });
          if (submitCount > 0 && authType === "register-admin") {
            trackUsage("didSubmitWithErrorsFirstAdmin", { count: submitCount.toString() });
          }
          if (registrationToken) {
            onSubmit(
              { userInfo: omit_default()(data, ["registrationToken"]), registrationToken },
              formik
            );
          } else {
            onSubmit(data, formik);
          }
        } catch (err) {
          const errors = (0,build.getYupInnerErrors)(err);
          setSubmitCount(submitCount + 1);
          formik.setErrors(errors);
        }
      }),
      validateOnChange: false
    },
    ({ values, errors, handleChange }) => {
      return /* @__PURE__ */ react.createElement(build.Form, { noValidate: true }, /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 6, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(Typography.Typography, { as: "h1", variant: "alpha" }, formatMessage({
        id: "Auth.form.welcome.title",
        defaultMessage: "Welcome to Strapi!"
      }))), /* @__PURE__ */ react.createElement(CenteredBox, { paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "epsilon", textColor: "neutral600" }, formatMessage({
        id: "Auth.form.register.subtitle",
        defaultMessage: "Credentials are only used to authenticate in Strapi. All saved data will be stored in your database."
      })))), /* @__PURE__ */ react.createElement(Stack.Stack, { spacing: 6 }, /* @__PURE__ */ react.createElement(Grid.Grid, { gap: 4 }, /* @__PURE__ */ react.createElement(Grid.GridItem, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput.TextInput,
        {
          name: "firstname",
          required: true,
          value: values.firstname,
          error: errors.firstname ? formatMessage(errors.firstname) : void 0,
          onChange: handleChange,
          label: formatMessage({
            id: "Auth.form.firstname.label",
            defaultMessage: "Firstname"
          })
        }
      )), /* @__PURE__ */ react.createElement(Grid.GridItem, { col: 6 }, /* @__PURE__ */ react.createElement(
        TextInput.TextInput,
        {
          name: "lastname",
          value: values.lastname,
          onChange: handleChange,
          label: formatMessage({
            id: "Auth.form.lastname.label",
            defaultMessage: "Lastname"
          })
        }
      ))), /* @__PURE__ */ react.createElement(
        TextInput.TextInput,
        {
          name: "email",
          disabled: fieldsToDisable.includes("email"),
          value: values.email,
          onChange: handleChange,
          error: errors.email ? formatMessage(errors.email) : void 0,
          required: true,
          label: formatMessage({
            id: "Auth.form.email.label",
            defaultMessage: "Email"
          }),
          type: "email"
        }
      ), /* @__PURE__ */ react.createElement(
        PasswordInput,
        {
          name: "password",
          onChange: handleChange,
          value: values.password,
          error: errors.password ? formatMessage(errors.password) : void 0,
          endAction: (
            // eslint-disable-next-line react/jsx-wrap-multilines
            /* @__PURE__ */ react.createElement(
              FieldActionWrapper/* default */.A,
              {
                onClick: (e) => {
                  e.preventDefault();
                  setPasswordShown((prev) => !prev);
                },
                label: formatMessage(
                  passwordShown ? {
                    id: "Auth.form.password.show-password",
                    defaultMessage: "Show password"
                  } : {
                    id: "Auth.form.password.hide-password",
                    defaultMessage: "Hide password"
                  }
                )
              },
              passwordShown ? /* @__PURE__ */ react.createElement((Eye_default()), null) : /* @__PURE__ */ react.createElement((EyeStriked_default()), null)
            )
          ),
          hint: formatMessage({
            id: "Auth.form.password.hint",
            defaultMessage: "Must be at least 8 characters, 1 uppercase, 1 lowercase & 1 number"
          }),
          required: true,
          label: formatMessage({
            id: "global.password",
            defaultMessage: "Password"
          }),
          type: passwordShown ? "text" : "password"
        }
      ), /* @__PURE__ */ react.createElement(
        PasswordInput,
        {
          name: "confirmPassword",
          onChange: handleChange,
          value: values.confirmPassword,
          error: errors.confirmPassword ? formatMessage(errors.confirmPassword) : void 0,
          endAction: (
            // eslint-disable-next-line react/jsx-wrap-multilines
            /* @__PURE__ */ react.createElement(
              FieldActionWrapper/* default */.A,
              {
                onClick: (e) => {
                  e.preventDefault();
                  setConfirmPasswordShown((prev) => !prev);
                },
                label: formatMessage(
                  confirmPasswordShown ? {
                    id: "Auth.form.password.show-password",
                    defaultMessage: "Show password"
                  } : {
                    id: "Auth.form.password.hide-password",
                    defaultMessage: "Hide password"
                  }
                )
              },
              confirmPasswordShown ? /* @__PURE__ */ react.createElement((Eye_default()), null) : /* @__PURE__ */ react.createElement((EyeStriked_default()), null)
            )
          ),
          required: true,
          label: formatMessage({
            id: "Auth.form.confirmPassword.label",
            defaultMessage: "Confirmation Password"
          }),
          type: confirmPasswordShown ? "text" : "password"
        }
      ), /* @__PURE__ */ react.createElement(
        Checkbox.Checkbox,
        {
          onValueChange: (checked) => {
            handleChange({ target: { value: checked, name: "news" } });
          },
          value: values.news,
          name: "news",
          "aria-label": "news"
        },
        formatMessage(
          {
            id: "Auth.form.register.news.label",
            defaultMessage: "Keep me updated about new features & upcoming improvements (by doing this you accept the {terms} and the {policy})."
          },
          {
            terms: /* @__PURE__ */ react.createElement(A, { target: "_blank", href: "https://strapi.io/terms", rel: "noreferrer" }, formatMessage({
              id: "Auth.privacy-policy-agreement.terms",
              defaultMessage: "terms"
            })),
            policy: /* @__PURE__ */ react.createElement(A, { target: "_blank", href: "https://strapi.io/privacy", rel: "noreferrer" }, formatMessage({
              id: "Auth.privacy-policy-agreement.policy",
              defaultMessage: "policy"
            }))
          }
        )
      ), /* @__PURE__ */ react.createElement(Button.Button, { fullWidth: true, size: "L", type: "submit" }, formatMessage({
        id: "Auth.form.button.register",
        defaultMessage: "Let's start"
      })))));
    }
  ), !noSignin && /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(build.Link, { label: "Auth.link.signin", to: "/auth/login" }, formatMessage({
    id: "Auth.link.signin.account",
    defaultMessage: "Already have an account?"
  }))))));
};
Register.defaultProps = {
  fieldsToDisable: [],
  noSignin: false,
  onSubmit: (e) => e.preventDefault()
};
Register.propTypes = {
  authType: (prop_types_default()).string.isRequired,
  fieldsToDisable: (prop_types_default()).array,
  noSignin: (prop_types_default()).bool,
  onSubmit: (prop_types_default()).func,
  schema: prop_types_default().shape({
    validate: (prop_types_default()).func.isRequired,
    type: (prop_types_default()).string.isRequired
  }).isRequired
};
/* harmony default export */ const components_Register = (Register);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/components/ResetPassword/index.js


















const ResetPassword_PasswordInput = (0,styled_components_browser_cjs["default"])((0,TextInput.TextInput))`
  ::-ms-reveal {
    display: none;
  }
`;
const ResetPassword_ForgotPassword = ({ onSubmit, schema }) => {
  const [passwordShown, setPasswordShown] = (0,react.useState)(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = (0,react.useState)(false);
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(
    formik_cjs_production_min.Formik,
    {
      enableReinitialize: true,
      initialValues: {
        password: "",
        confirmPassword: ""
      },
      onSubmit,
      validationSchema: schema,
      validateOnChange: false
    },
    ({ values, errors, handleChange }) => /* @__PURE__ */ react.createElement(build.Form, { noValidate: true }, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 6, paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography.Typography, { as: "h1", variant: "alpha" }, formatMessage({
      id: "global.reset-password",
      defaultMessage: "Reset password"
    }))), errors.errorMessage && /* @__PURE__ */ react.createElement(
      Typography.Typography,
      {
        id: "global-form-error",
        role: "alert",
        tabIndex: -1,
        textColor: "danger600"
      },
      formatMessage({
        id: errors.errorMessage,
        defaultMessage: "An error occurred"
      })
    )), /* @__PURE__ */ react.createElement(Stack.Stack, { spacing: 6 }, /* @__PURE__ */ react.createElement(
      ResetPassword_PasswordInput,
      {
        name: "password",
        onChange: handleChange,
        value: values.password,
        error: errors.password ? formatMessage({
          id: errors.password,
          defaultMessage: "This field is required."
        }) : void 0,
        endAction: /* @__PURE__ */ react.createElement(
          FieldActionWrapper/* default */.A,
          {
            onClick: (e) => {
              e.preventDefault();
              setPasswordShown((prev) => !prev);
            },
            label: formatMessage(
              passwordShown ? {
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              } : {
                id: "Auth.form.password.hide-password",
                defaultMessage: "Hide password"
              }
            )
          },
          passwordShown ? /* @__PURE__ */ react.createElement((Eye_default()), null) : /* @__PURE__ */ react.createElement((EyeStriked_default()), null)
        ),
        hint: formatMessage({
          id: "Auth.form.password.hint",
          defaultMessage: "Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number"
        }),
        required: true,
        label: formatMessage({
          id: "global.password",
          defaultMessage: "Password"
        }),
        type: passwordShown ? "text" : "password"
      }
    ), /* @__PURE__ */ react.createElement(
      ResetPassword_PasswordInput,
      {
        name: "confirmPassword",
        onChange: handleChange,
        value: values.confirmPassword,
        error: errors.confirmPassword ? formatMessage({
          id: errors.confirmPassword,
          defaultMessage: "This value is required."
        }) : void 0,
        endAction: /* @__PURE__ */ react.createElement(
          FieldActionWrapper/* default */.A,
          {
            onClick: (e) => {
              e.preventDefault();
              setConfirmPasswordShown((prev) => !prev);
            },
            label: formatMessage(
              passwordShown ? {
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              } : {
                id: "Auth.form.password.hide-password",
                defaultMessage: "Hide password"
              }
            )
          },
          confirmPasswordShown ? /* @__PURE__ */ react.createElement((Eye_default()), null) : /* @__PURE__ */ react.createElement((EyeStriked_default()), null)
        ),
        required: true,
        label: formatMessage({
          id: "Auth.form.confirmPassword.label",
          defaultMessage: "Confirmation Password"
        }),
        type: confirmPasswordShown ? "text" : "password"
      }
    ), /* @__PURE__ */ react.createElement(Button.Button, { fullwidth: true, type: "submit" }, formatMessage({
      id: "global.change-password",
      defaultMessage: "Change password"
    }))))
  )), /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(build.Link, { to: "/auth/login" }, formatMessage({ id: "Auth.link.ready", defaultMessage: "Ready to sign in?" }))))));
};
ResetPassword_ForgotPassword.defaultProps = {
  onSubmit: (e) => e.preventDefault()
};
ResetPassword_ForgotPassword.propTypes = {
  onSubmit: (prop_types_default()).func,
  schema: prop_types_default().shape({
    type: (prop_types_default()).string.isRequired
  }).isRequired
};
/* harmony default export */ const ResetPassword = (ResetPassword_ForgotPassword);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/utils/forms.js
var Login=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(54253)/* ["default"] */ .A);}return (__webpack_require__(36191)/* ["default"] */ .A);}();var forms_forms={'forgot-password':{Component:components_ForgotPassword,endPoint:'forgot-password',fieldsToDisable:[],fieldsToOmit:[],schema:lib/* object */.Ik().shape({email:lib/* string */.Yj().email(build.translatedErrors.email).required(build.translatedErrors.required)}),inputsPrefix:''},'forgot-password-success':{Component:components_ForgotPasswordSuccess,endPoint:'',fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:''},login:{Component:Login,endPoint:'login',fieldsToDisable:[],fieldsToOmit:['rememberMe'],schema:lib/* object */.Ik().shape({email:lib/* string */.Yj().email(build.translatedErrors.email).required(build.translatedErrors.required),password:lib/* string */.Yj().required(build.translatedErrors.required),rememberMe:lib/* bool */.lc().nullable()}),inputsPrefix:''},oops:{Component:components_Oops,endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:''},register:{Component:components_Register,endPoint:'register',fieldsToDisable:['email'],fieldsToOmit:['userInfo.confirmPassword','userInfo.news','userInfo.email'],schema:lib/* object */.Ik().shape({firstname:lib/* string */.Yj().trim().required(build.translatedErrors.required),lastname:lib/* string */.Yj(),password:lib/* string */.Yj().min(8,build.translatedErrors.minLength).matches(/[a-z]/,'components.Input.error.contain.lowercase').matches(/[A-Z]/,'components.Input.error.contain.uppercase').matches(/\d/,'components.Input.error.contain.number').required(build.translatedErrors.required),confirmPassword:lib/* string */.Yj().oneOf([lib/* ref */.KR('password'),null],'components.Input.error.password.noMatch').required(build.translatedErrors.required),registrationToken:lib/* string */.Yj().required(build.translatedErrors.required)}),inputsPrefix:'userInfo.'},'register-admin':{Component:components_Register,endPoint:'register-admin',noSignin:true,fieldsToDisable:[],fieldsToOmit:['confirmPassword','news'],schema:lib/* object */.Ik().shape({firstname:lib/* string */.Yj().trim().required(build.translatedErrors.required),lastname:lib/* string */.Yj(),password:lib/* string */.Yj().min(8,build.translatedErrors.minLength).matches(/[a-z]/,'components.Input.error.contain.lowercase').matches(/[A-Z]/,'components.Input.error.contain.uppercase').matches(/\d/,'components.Input.error.contain.number').required(build.translatedErrors.required),email:lib/* string */.Yj().email(build.translatedErrors.email).strict().lowercase(build.translatedErrors.lowercase).required(build.translatedErrors.required),confirmPassword:lib/* string */.Yj().oneOf([lib/* ref */.KR('password'),null],'components.Input.error.password.noMatch').required(build.translatedErrors.required)}),inputsPrefix:''},'reset-password':{Component:ResetPassword,endPoint:'reset-password',fieldsToDisable:[],fieldsToOmit:['confirmPassword'],schema:lib/* object */.Ik().shape({password:lib/* string */.Yj().min(8,build.translatedErrors.minLength).matches(/[a-z]/,'components.Input.error.contain.lowercase').matches(/[A-Z]/,'components.Input.error.contain.uppercase').matches(/\d/,'components.Input.error.contain.number').required(build.translatedErrors.required),confirmPassword:lib/* string */.Yj().oneOf([lib/* ref */.KR('password'),null],'components.Input.error.password.noMatch').required(build.translatedErrors.required)})}};/* harmony default export */ const utils_forms = (forms_forms);

/***/ }),

/***/ 84060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ src_permissions)
});

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
;// CONCATENATED MODULE: ./.cache/admin/src/permissions/defaultPermissions.js
const permissions = {
  contentManager: {
    main: [],
    collectionTypesConfigurations: [
      {
        action: "plugin::content-manager.collection-types.configure-view",
        subject: null
      }
    ],
    componentsConfigurations: [
      {
        action: "plugin::content-manager.components.configure-layout",
        subject: null
      }
    ],
    singleTypesConfigurations: [
      {
        action: "plugin::content-manager.single-types.configure-view",
        subject: null
      }
    ]
  },
  marketplace: {
    main: [
      { action: "admin::marketplace.read", subject: null },
      { action: "admin::marketplace.plugins.install", subject: null },
      { action: "admin::marketplace.plugins.uninstall", subject: null }
    ],
    install: [{ action: "admin::marketplace.plugins.install", subject: null }],
    read: [
      { action: "admin::marketplace.read", subject: null },
      { action: "admin::marketplace.plugins.uninstall", subject: null }
    ],
    uninstall: [{ action: "admin::marketplace.plugins.uninstall", subject: null }]
  },
  settings: {
    roles: {
      main: [
        { action: "admin::roles.create", subject: null },
        { action: "admin::roles.update", subject: null },
        { action: "admin::roles.read", subject: null },
        { action: "admin::roles.delete", subject: null }
      ],
      create: [{ action: "admin::roles.create", subject: null }],
      delete: [{ action: "admin::roles.delete", subject: null }],
      read: [{ action: "admin::roles.read", subject: null }],
      update: [{ action: "admin::roles.update", subject: null }]
    },
    users: {
      main: [
        { action: "admin::users.create", subject: null },
        { action: "admin::users.read", subject: null },
        { action: "admin::users.update", subject: null },
        { action: "admin::users.delete", subject: null }
      ],
      create: [{ action: "admin::users.create", subject: null }],
      delete: [{ action: "admin::users.delete", subject: null }],
      read: [{ action: "admin::users.read", subject: null }],
      update: [{ action: "admin::users.update", subject: null }]
    },
    webhooks: {
      main: [
        { action: "admin::webhooks.create", subject: null },
        { action: "admin::webhooks.read", subject: null },
        { action: "admin::webhooks.update", subject: null },
        { action: "admin::webhooks.delete", subject: null }
      ],
      create: [{ action: "admin::webhooks.create", subject: null }],
      delete: [{ action: "admin::webhooks.delete", subject: null }],
      read: [
        { action: "admin::webhooks.read", subject: null },
        // NOTE: We need to check with the API
        { action: "admin::webhooks.update", subject: null },
        { action: "admin::webhooks.delete", subject: null }
      ],
      update: [{ action: "admin::webhooks.update", subject: null }]
    },
    "api-tokens": {
      main: [{ action: "admin::api-tokens.access", subject: null }],
      create: [{ action: "admin::api-tokens.create", subject: null }],
      delete: [{ action: "admin::api-tokens.delete", subject: null }],
      read: [{ action: "admin::api-tokens.read", subject: null }],
      update: [{ action: "admin::api-tokens.update", subject: null }],
      regenerate: [{ action: "admin::api-tokens.regenerate", subject: null }]
    }
  }
};
/* harmony default export */ const defaultPermissions = (permissions);

;// CONCATENATED MODULE: ./.cache/admin/src/permissions/index.js
var customPermissions=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(86775)/* ["default"] */ .A);}return (__webpack_require__(49949)/* ["default"] */ .A);}();var permissions_permissions=(0,lodash.merge)(defaultPermissions,customPermissions);/* harmony default export */ const src_permissions = (permissions_permissions);

/***/ }),

/***/ 61734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src_StrapiApp)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(79296);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/themes.js
var themes = __webpack_require__(12495);
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__(55364);
var merge_default = /*#__PURE__*/__webpack_require__.n(merge);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(44383);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/isFunction.js
var isFunction = __webpack_require__(1882);
var isFunction_default = /*#__PURE__*/__webpack_require__.n(isFunction);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(20311);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(39125);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var utils = __webpack_require__(30158);
// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__(47459);
;// CONCATENATED MODULE: ./.cache/admin/src/core/store/createReducer.js

const createReducer = (reducers) => (0,redux.combineReducers)(reducers);
/* harmony default export */ const store_createReducer = (createReducer);

;// CONCATENATED MODULE: ./.cache/admin/src/core/store/configureStore.js


const configureStore = (appMiddlewares, appReducers) => {
  const middlewares = [];
  appMiddlewares.forEach((middleware) => {
    middlewares.push(middleware());
  });
  return (0,redux.createStore)(store_createReducer(appReducers), {}, (0,redux.applyMiddleware)(...middlewares));
};
/* harmony default export */ const store_configureStore = (configureStore);

// EXTERNAL MODULE: ./.cache/admin/src/core/apis/index.js + 6 modules
var apis = __webpack_require__(86835);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(29434);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(10848);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(89520);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./.cache/admin/src/components/PrivateRoute/index.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const PrivateRoute = (_a) => {
  var _b = _a, { component: Component, path } = _b, rest = __objRest(_b, ["component", "path"]);
  const { pathname, search } = (0,react_router_dom_min.useLocation)();
  return /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      path,
      render: (props) => build.auth.getToken() !== null ? /* @__PURE__ */ react.createElement(Component, __spreadValues(__spreadValues({}, rest), props)) : /* @__PURE__ */ react.createElement(
        react_router_dom_min.Redirect,
        {
          to: {
            pathname: "/auth/login",
            search: pathname !== "/" && `?redirectTo=${encodeURIComponent(`${pathname}${search}`)}`
          }
        }
      )
    }
  );
};
PrivateRoute.propTypes = {
  component: (prop_types_default()).any.isRequired,
  path: (prop_types_default()).string.isRequired
};
/* harmony default export */ const components_PrivateRoute = ((0,react.memo)(PrivateRoute));

// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 8 modules
var src_utils = __webpack_require__(6576);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(54705);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(10467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(80296);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(53986);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(54756);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/lodash/camelCase.js
var camelCase = __webpack_require__(84058);
var camelCase_default = /*#__PURE__*/__webpack_require__.n(camelCase);
// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(58156);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(90179);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/persistStateToLocaleStorage.js
const CURRENT_STEP = "GUIDED_TOUR_CURRENT_STEP";
const COMPLETED_STEPS = "GUIDED_TOUR_COMPLETED_STEPS";
const SKIPPED = "GUIDED_TOUR_SKIPPED";
const parse = JSON.parse;
const stringify = JSON.stringify;
const persistStateToLocaleStorage = {
  clear() {
    localStorage.removeItem(CURRENT_STEP);
    localStorage.removeItem(COMPLETED_STEPS);
  },
  addCompletedStep(completedStep) {
    var _a;
    const currentSteps = ((_a = parse(localStorage.getItem(COMPLETED_STEPS))) == null ? void 0 : _a.slice()) || [];
    const isAlreadyStored = currentSteps.includes(completedStep);
    if (isAlreadyStored) {
      return;
    }
    currentSteps.push(completedStep);
    localStorage.setItem(COMPLETED_STEPS, stringify(currentSteps));
  },
  addCurrentStep(currentStep) {
    localStorage.setItem(CURRENT_STEP, stringify(currentStep));
  },
  setSkipped(value) {
    localStorage.setItem(SKIPPED, stringify(value));
  },
  get(item) {
    return parse(localStorage.getItem(item));
  }
};
/* harmony default export */ const utils_persistStateToLocaleStorage = (persistStateToLocaleStorage);

// EXTERNAL MODULE: ./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js
var useLocalesProvider = __webpack_require__(67366);
// EXTERNAL MODULE: ./.cache/admin/src/utils/formatAPIErrors.js
var formatAPIErrors = __webpack_require__(34179);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/init.js
const init = (initialState) => {
  return initialState;
};
/* harmony default export */ const AuthPage_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.cjs.production.min.js
var immer_cjs_production_min = __webpack_require__(56477);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/reducer.js


const initialState = {
  formErrors: {},
  modifiedData: {},
  requestError: null
};
const reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "ON_CHANGE": {
      (0,lodash.set)(draftState.modifiedData, action.keys.split("."), action.value);
      break;
    }
    case "RESET_PROPS": {
      return initialState;
    }
    case "SET_DATA": {
      draftState.modifiedData = action.data;
      break;
    }
    case "SET_ERRORS": {
      draftState.formErrors = action.errors;
      break;
    }
    case "SET_REQUEST_ERROR": {
      draftState.requestError = {
        errorMessage: action.errorMessage,
        errorStatus: action.errorStatus
      };
      break;
    }
    default:
      return draftState;
  }
});


;// CONCATENATED MODULE: ./.cache/admin/src/pages/AuthPage/index.js
/* provided dependency */ var console = __webpack_require__(96763);
var _excluded=["Component","endPoint","fieldsToDisable","fieldsToOmit","inputsPrefix","schema"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable;})),t.push.apply(t,o);}return t;}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach(function(r){(0,defineProperty/* default */.A)(e,r,t[r]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r));});}return e;}var AuthPage_forms=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(69130)/* ["default"] */ .A);}return (__webpack_require__(26003)/* ["default"] */ .A);}();var AuthPage=function AuthPage(_ref){var hasAdmin=_ref.hasAdmin,setHasAdmin=_ref.setHasAdmin;var _useHistory=(0,react_router_dom_min.useHistory)(),push=_useHistory.push,search=_useHistory.location.search;var _useLocalesProvider=(0,useLocalesProvider/* default */.A)(),changeLocale=_useLocalesProvider.changeLocale;var _useGuidedTour=(0,build.useGuidedTour)(),setSkipped=_useGuidedTour.setSkipped;var _useTracking=(0,build.useTracking)(),trackUsage=_useTracking.trackUsage;var _useRouteMatch=(0,react_router_dom_min.useRouteMatch)('/auth/:authType'),authType=_useRouteMatch.params.authType;var query=(0,build.useQuery)();var _get=get_default()(AuthPage_forms,authType,{}),Component=_get.Component,endPoint=_get.endPoint,fieldsToDisable=_get.fieldsToDisable,fieldsToOmit=_get.fieldsToOmit,inputsPrefix=_get.inputsPrefix,schema=_get.schema,rest=(0,objectWithoutProperties/* default */.A)(_get,_excluded);var _useReducer=(0,react.useReducer)(reducer,initialState,AuthPage_init),_useReducer2=(0,slicedToArray/* default */.A)(_useReducer,2),_useReducer2$=_useReducer2[0],formErrors=_useReducer2$.formErrors,modifiedData=_useReducer2$.modifiedData,requestError=_useReducer2$.requestError,dispatch=_useReducer2[1];var CancelToken=(axios_default()).CancelToken;var source=CancelToken.source();(0,react.useEffect)(function(){// Cancel request on unmount
return function(){source.cancel('Component unmounted');};// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);// Reset the state on navigation change
(0,react.useEffect)(function(){dispatch({type:'RESET_PROPS'});},[authType]);var handleChange=function handleChange(_ref2){var _ref2$target=_ref2.target,name=_ref2$target.name,value=_ref2$target.value;dispatch({type:'ON_CHANGE',keys:name,value:value});};var handleSubmit=/*#__PURE__*/function(){var _ref4=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee(e,_ref3){var setSubmitting,setErrors,body,requestURL;return regenerator_default().wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:setSubmitting=_ref3.setSubmitting,setErrors=_ref3.setErrors;setSubmitting(true);body=omit_default()(e,fieldsToOmit);requestURL="/admin/".concat(endPoint);if(!(authType==='login')){_context.next=7;break;}_context.next=7;return loginRequest(e,requestURL,{setSubmitting:setSubmitting,setErrors:setErrors});case 7:if(!(authType==='register'||authType==='register-admin')){_context.next=10;break;}_context.next=10;return registerRequest(e,requestURL,{setSubmitting:setSubmitting,setErrors:setErrors});case 10:if(!(authType==='forgot-password')){_context.next=13;break;}_context.next=13;return forgotPasswordRequest(body,requestURL,{setSubmitting:setSubmitting,setErrors:setErrors});case 13:if(!(authType==='reset-password')){_context.next=16;break;}_context.next=16;return resetPasswordRequest(body,requestURL,{setSubmitting:setSubmitting,setErrors:setErrors});case 16:case"end":return _context.stop();}},_callee);}));return function handleSubmit(_x,_x2){return _ref4.apply(this,arguments);};}();var forgotPasswordRequest=/*#__PURE__*/function(){var _ref6=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee2(body,requestURL,_ref5){var setSubmitting,setErrors;return regenerator_default().wrap(function _callee2$(_context2){while(1)switch(_context2.prev=_context2.next){case 0:setSubmitting=_ref5.setSubmitting,setErrors=_ref5.setErrors;_context2.prev=1;_context2.next=4;return axios_default()({method:'POST',url:"".concat(strapi.backendURL).concat(requestURL),data:body,cancelToken:source.token});case 4:push('/auth/forgot-password-success');_context2.next=11;break;case 7:_context2.prev=7;_context2.t0=_context2["catch"](1);console.error(_context2.t0);setErrors({errorMessage:'notification.error'});case 11:_context2.prev=11;setSubmitting(false);return _context2.finish(11);case 14:case"end":return _context2.stop();}},_callee2,null,[[1,7,11,14]]);}));return function forgotPasswordRequest(_x3,_x4,_x5){return _ref6.apply(this,arguments);};}();var loginRequest=/*#__PURE__*/function(){var _ref8=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee3(body,requestURL,_ref7){var setSubmitting,setErrors,_yield$axios,_yield$axios$data$dat,token,user,errorMessage;return regenerator_default().wrap(function _callee3$(_context3){while(1)switch(_context3.prev=_context3.next){case 0:setSubmitting=_ref7.setSubmitting,setErrors=_ref7.setErrors;_context3.prev=1;_context3.next=4;return axios_default()({method:'POST',url:"".concat(strapi.backendURL).concat(requestURL),data:omit_default()(body,fieldsToOmit),cancelToken:source.token});case 4:_yield$axios=_context3.sent;_yield$axios$data$dat=_yield$axios.data.data;token=_yield$axios$data$dat.token;user=_yield$axios$data$dat.user;if(user.preferedLanguage){changeLocale(user.preferedLanguage);}build.auth.setToken(token,body.rememberMe);build.auth.setUserInfo(user,body.rememberMe);redirectToPreviousLocation();_context3.next=23;break;case 14:_context3.prev=14;_context3.t0=_context3["catch"](1);if(!_context3.t0.response){_context3.next=23;break;}errorMessage=get_default()(_context3.t0,['response','data','error','message'],'Something went wrong');if(!(camelCase_default()(errorMessage).toLowerCase()==='usernotactive')){_context3.next=22;break;}push('/auth/oops');dispatch({type:'RESET_PROPS'});return _context3.abrupt("return");case 22:setErrors({errorMessage:errorMessage});case 23:_context3.prev=23;setSubmitting(false);return _context3.finish(23);case 26:case"end":return _context3.stop();}},_callee3,null,[[1,14,23,26]]);}));return function loginRequest(_x6,_x7,_x8){return _ref8.apply(this,arguments);};}();var registerRequest=/*#__PURE__*/function(){var _ref10=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee4(body,requestURL,_ref9){var setSubmitting,setErrors,_yield$axios2,_yield$axios2$data$da,token,user,roles,isUserSuperAdmin,data,apiErrors;return regenerator_default().wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:setSubmitting=_ref9.setSubmitting,setErrors=_ref9.setErrors;_context4.prev=1;trackUsage('willCreateFirstAdmin');_context4.next=5;return axios_default()({method:'POST',url:"".concat(strapi.backendURL).concat(requestURL),data:omit_default()(body,fieldsToOmit),cancelToken:source.token});case 5:_yield$axios2=_context4.sent;_yield$axios2$data$da=_yield$axios2.data.data;token=_yield$axios2$data$da.token;user=_yield$axios2$data$da.user;build.auth.setToken(token,false);build.auth.setUserInfo(user,false);setSubmitting(false);setHasAdmin(true);roles=user.roles;if(roles){isUserSuperAdmin=roles.find(function(_ref11){var code=_ref11.code;return code==='strapi-super-admin';});if(isUserSuperAdmin){utils_persistStateToLocaleStorage.setSkipped(false);setSkipped(false);trackUsage('didLaunchGuidedtour');}}if(!(authType==='register'&&body.userInfo.news===true||authType==='register-admin'&&body.news===true)){_context4.next=18;break;}push({pathname:'/usecase',search:"?hasAdmin=".concat(hasAdmin)});return _context4.abrupt("return");case 18:redirectToPreviousLocation();_context4.next=25;break;case 21:_context4.prev=21;_context4.t0=_context4["catch"](1);trackUsage('didNotCreateFirstAdmin');if(_context4.t0.response){data=_context4.t0.response.data;apiErrors=(0,formatAPIErrors/* default */.A)(data);setErrors({apiErrors:apiErrors});}case 25:case"end":return _context4.stop();}},_callee4,null,[[1,21]]);}));return function registerRequest(_x9,_x10,_x11){return _ref10.apply(this,arguments);};}();var resetPasswordRequest=/*#__PURE__*/function(){var _ref13=(0,asyncToGenerator/* default */.A)(/*#__PURE__*/regenerator_default().mark(function _callee5(body,requestURL,_ref12){var setErrors,setSubmitting,_yield$axios3,_yield$axios3$data$da,token,user,errorMessage,errorStatus;return regenerator_default().wrap(function _callee5$(_context5){while(1)switch(_context5.prev=_context5.next){case 0:setErrors=_ref12.setErrors,setSubmitting=_ref12.setSubmitting;_context5.prev=1;_context5.next=4;return axios_default()({method:'POST',url:"".concat(strapi.backendURL).concat(requestURL),data:_objectSpread(_objectSpread({},body),{},{resetPasswordToken:query.get('code')}),cancelToken:source.token});case 4:_yield$axios3=_context5.sent;_yield$axios3$data$da=_yield$axios3.data.data;token=_yield$axios3$data$da.token;user=_yield$axios3$data$da.user;build.auth.setToken(token,false);build.auth.setUserInfo(user,false);// Redirect to the homePage
push('/');_context5.next=16;break;case 13:_context5.prev=13;_context5.t0=_context5["catch"](1);if(_context5.t0.response){errorMessage=get_default()(_context5.t0,['response','data','message'],'Something went wrong');errorStatus=get_default()(_context5.t0,['response','data','statusCode'],400);dispatch({type:'SET_REQUEST_ERROR',errorMessage:errorMessage,errorStatus:errorStatus});setErrors({errorMessage:errorMessage});}case 16:_context5.prev=16;setSubmitting(false);return _context5.finish(16);case 19:case"end":return _context5.stop();}},_callee5,null,[[1,13,16,19]]);}));return function resetPasswordRequest(_x12,_x13,_x14){return _ref13.apply(this,arguments);};}();var redirectToPreviousLocation=function redirectToPreviousLocation(){if(authType==='login'){var redirectTo=query.get('redirectTo');var redirectUrl=redirectTo?decodeURIComponent(redirectTo):'/';push(redirectUrl);}else{push('/');}};// Redirect the user to the login page if
// the endpoint does not exist or
// there is already an admin user oo
// the user is already logged in
if(!AuthPage_forms[authType]||hasAdmin&&authType==='register-admin'||build.auth.getToken()){return/*#__PURE__*/react.createElement(react_router_dom_min.Redirect,{to:"/"});}// Redirect the user to the register-admin if it is the first user
if(!hasAdmin&&authType!=='register-admin'){return/*#__PURE__*/react.createElement(react_router_dom_min.Redirect,{to:{pathname:'/auth/register-admin',// Forward the `?redirectTo` from /auth/login
// /abc => /auth/login?redirectTo=%2Fabc => /auth/register-admin?redirectTo=%2Fabc
search:search}});}return/*#__PURE__*/react.createElement(Component,(0,esm_extends/* default */.A)({},rest,{authType:authType,fieldsToDisable:fieldsToDisable,formErrors:formErrors,inputsPrefix:inputsPrefix,modifiedData:modifiedData,onChange:handleChange,onSubmit:handleSubmit,requestError:requestError,schema:schema}));};AuthPage.defaultProps={hasAdmin:false};AuthPage.propTypes={hasAdmin:(prop_types_default()).bool,setHasAdmin:(prop_types_default()).func.isRequired};/* harmony default export */ const pages_AuthPage = (AuthPage);
// EXTERNAL MODULE: ./.cache/admin/src/pages/NotFoundPage/index.js
var NotFoundPage = __webpack_require__(49021);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(8162);
// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(55373);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(76686);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(47932);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(10661);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(63760);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Select.js
var Select = __webpack_require__(7037);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/TextInput.js
var TextInput = __webpack_require__(69668);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/TextButton.js
var TextButton = __webpack_require__(56238);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(60245);
// EXTERNAL MODULE: ./.cache/admin/src/components/UnauthenticatedLogo/index.js
var UnauthenticatedLogo = __webpack_require__(94550);
// EXTERNAL MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/index.js + 1 modules
var UnauthenticatedLayout = __webpack_require__(32420);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/UseCasePage/index.js


















const options = [
  {
    intlLabel: {
      id: "Usecase.front-end",
      defaultMessage: "Front-end developer"
    },
    value: "front_end_developer"
  },
  {
    intlLabel: {
      id: "Usecase.back-end",
      defaultMessage: "Back-end developer"
    },
    value: "back_end_developer"
  },
  {
    intlLabel: {
      id: "Usecase.full-stack",
      defaultMessage: "Full-stack developer"
    },
    value: "full_stack_developer"
  },
  {
    intlLabel: {
      id: "global.content-manager",
      defaultMessage: "Content Manager"
    },
    value: "content_manager"
  },
  {
    intlLabel: {
      id: "Usecase.content-creator",
      defaultMessage: "Content Creator"
    },
    value: "content_creator"
  },
  {
    intlLabel: {
      id: "Usecase.other",
      defaultMessage: "Other"
    },
    value: "other"
  }
];
const TypographyCenter = (0,styled_components_browser_cjs["default"])((0,Typography.Typography))`
  text-align: center;
`;
const UseCasePage = () => {
  const toggleNotification = (0,build.useNotification)();
  const { push, location } = (0,react_router_dom_min.useHistory)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const [role, setRole] = (0,react.useState)();
  const [otherRole, setOtherRole] = (0,react.useState)("");
  const { firstname, email } = build.auth.getUserInfo();
  const { hasAdmin } = (0,lib.parse)(location == null ? void 0 : location.search, { ignoreQueryPrefix: true });
  const isOther = role === "other";
  const handleSubmit = (skipPersona) => {
    try {
      axios_default()({
        method: "POST",
        url: "https://analytics.strapi.io/register",
        data: {
          email,
          username: firstname,
          firstAdmin: Boolean(!hasAdmin),
          persona: {
            role: skipPersona ? void 0 : role,
            otherRole: skipPersona ? void 0 : otherRole
          }
        }
      });
      toggleNotification({
        type: "success",
        message: {
          id: "Usecase.notification.success.project-created",
          defaultMessage: "Project has been successfully created"
        }
      });
      push("/");
    } catch (err) {
    }
  };
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main.Main, { labelledBy: "usecase-title" }, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement("form", { onSubmit: () => handleSubmit(false) }, /* @__PURE__ */ react.createElement(Flex.Flex, { direction: "column", paddingBottom: 7 }, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 6, paddingBottom: 1, width: (0,build.pxToRem)(250) }, /* @__PURE__ */ react.createElement(TypographyCenter, { variant: "alpha", as: "h1", id: "usecase-title" }, formatMessage({
    id: "Usecase.title",
    defaultMessage: "Tell us a bit more about yourself"
  })))), /* @__PURE__ */ react.createElement(Stack.Stack, { spacing: 6 }, /* @__PURE__ */ react.createElement(
    Select.Select,
    {
      id: "usecase",
      "data-testid": "usecase",
      label: formatMessage({
        id: "Usecase.input.work-type",
        defaultMessage: "What type of work do you do?"
      }),
      onChange: setRole,
      value: role
    },
    options.map(({ intlLabel, value }) => /* @__PURE__ */ react.createElement(Select.Option, { key: value, value }, formatMessage(intlLabel)))
  ), isOther && /* @__PURE__ */ react.createElement(
    TextInput.TextInput,
    {
      name: "other",
      label: formatMessage({ id: "Usecase.other", defaultMessage: "Other" }),
      value: otherRole,
      onChange: (e) => setOtherRole(e.target.value),
      "data-testid": "other"
    }
  ), /* @__PURE__ */ react.createElement(Button.Button, { type: "submit", size: "L", fullWidth: true, disabled: !role }, formatMessage({ id: "global.finish", defaultMessage: "Finish" }))))), /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(TextButton.TextButton, { onClick: () => handleSubmit(true) }, formatMessage({
    id: "Usecase.button.skip",
    defaultMessage: "Skip this question"
  }))))));
};
/* harmony default export */ const pages_UseCasePage = (UseCasePage);

// EXTERNAL MODULE: ./node_modules/@fingerprintjs/fingerprintjs/dist/fp.cjs.js
var fp_cjs = __webpack_require__(2417);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/App/utils/unique-identifier.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const getUniqueIdentifier = () => __async(void 0, null, function* () {
  const fp = yield fp_cjs/* default.load */.Ay.load();
  const result = yield fp.get();
  const deviceId = `web-fingerprint-${result.visitorId}`;
  return deviceId;
});
/* harmony default export */ const unique_identifier = (getUniqueIdentifier);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(45458);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/App/utils/defaultRoutes.js
const defaultRoutes = [];
/* harmony default export */ const utils_defaultRoutes = (defaultRoutes);

;// CONCATENATED MODULE: ./.cache/admin/src/pages/App/utils/routes.js
var customRoutes=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(32874)/* ["default"] */ .A);}return (__webpack_require__(8689)/* ["default"] */ .A);}();/* harmony default export */ const routes = ([].concat((0,toConsumableArray/* default */.A)(customRoutes),(0,toConsumableArray/* default */.A)(utils_defaultRoutes)));
;// CONCATENATED MODULE: ./.cache/admin/src/pages/App/utils/index.js



// EXTERNAL MODULE: ./.cache/admin/src/hooks/index.js + 28 modules
var hooks = __webpack_require__(70436);
;// CONCATENATED MODULE: ./.cache/admin/src/pages/App/index.js
var App_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var App_getOwnPropSymbols = Object.getOwnPropertySymbols;
var App_hasOwnProp = Object.prototype.hasOwnProperty;
var App_propIsEnum = Object.prototype.propertyIsEnumerable;
var App_defNormalProp = (obj, key, value) => key in obj ? App_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var App_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (App_hasOwnProp.call(b, prop))
      App_defNormalProp(a, prop, b[prop]);
  if (App_getOwnPropSymbols)
    for (var prop of App_getOwnPropSymbols(b)) {
      if (App_propIsEnum.call(b, prop))
        App_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var App_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};














const AuthenticatedApp = (0,react.lazy)(
  () => Promise.all(/* import() | Admin-authenticatedApp */[__webpack_require__.e(6784), __webpack_require__.e(3598), __webpack_require__.e(6651)]).then(__webpack_require__.bind(__webpack_require__, 41618))
);
function App() {
  const toggleNotification = (0,build.useNotification)();
  const { updateProjectSettings } = (0,hooks/* useConfigurations */.Bp)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const [{ isLoading, hasAdmin, uuid }, setState] = (0,react.useState)({ isLoading: true, hasAdmin: false });
  const appInfo = (0,build.useAppInfos)();
  const authRoutes = (0,react.useMemo)(() => {
    return (0,src_utils/* makeUniqueRoutes */._f)(
      routes.map(({ to, Component, exact }) => (0,src_utils/* createRoute */.un)(Component, to, exact))
    );
  }, []);
  const [telemetryProperties, setTelemetryProperties] = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    const currentToken = build.auth.getToken();
    const renewToken = () => App_async(this, null, function* () {
      try {
        const {
          data: { token }
        } = yield (0,build.request)("/admin/renew-token", {
          method: "POST",
          body: { token: currentToken }
        });
        build.auth.updateToken(token);
      } catch (err) {
        build.auth.clearAppStorage();
        window.location.reload();
      }
    });
    if (currentToken) {
      renewToken();
    }
  }, []);
  (0,react.useEffect)(() => {
    const getData = () => App_async(this, null, function* () {
      try {
        const {
          data: {
            data: { hasAdmin: hasAdmin2, uuid: uuid2, menuLogo }
          }
        } = yield axios_default().get(`${strapi.backendURL}/admin/init`);
        updateProjectSettings({ menuLogo: (0,build.prefixFileUrlWithBackendUrl)(menuLogo) });
        if (uuid2) {
          const {
            data: { data: properties }
          } = yield axios_default().get(`${strapi.backendURL}/admin/telemetry-properties`);
          setTelemetryProperties(properties);
          try {
            const deviceId = yield unique_identifier();
            fetch("https://analytics.strapi.io/track", {
              method: "POST",
              body: JSON.stringify({
                event: "didInitializeAdministration",
                uuid: uuid2,
                deviceId,
                properties: __spreadProps(App_spreadValues({}, properties), {
                  environment: appInfo.currentEnvironment
                })
              }),
              headers: {
                "Content-Type": "application/json"
              }
            });
          } catch (e) {
          }
        }
        setState({ isLoading: false, hasAdmin: hasAdmin2, uuid: uuid2 });
      } catch (err) {
        toggleNotification({
          type: "warning",
          message: { id: "app.containers.App.notification.error.init" }
        });
      }
    });
    getData();
  }, [toggleNotification, updateProjectSettings]);
  const setHasAdmin = (hasAdmin2) => setState((prev) => __spreadProps(App_spreadValues({}, prev), { hasAdmin: hasAdmin2 }));
  const trackingInfo = (0,react.useMemo)(
    () => ({
      uuid,
      telemetryProperties
    }),
    [uuid, telemetryProperties]
  );
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
  }
  return /* @__PURE__ */ react.createElement(react.Suspense, { fallback: /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null) }, /* @__PURE__ */ react.createElement(Main.SkipToContent, null, formatMessage({ id: "skipToContent" })), /* @__PURE__ */ react.createElement(build.TrackingProvider, { value: trackingInfo }, /* @__PURE__ */ react.createElement(react_router_dom_min.Switch, null, authRoutes, /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      path: "/auth/:authType",
      render: (routerProps) => /* @__PURE__ */ react.createElement(pages_AuthPage, __spreadProps(App_spreadValues({}, routerProps), { setHasAdmin, hasAdmin })),
      exact: true
    }
  ), /* @__PURE__ */ react.createElement(components_PrivateRoute, { path: "/usecase", component: pages_UseCasePage }), /* @__PURE__ */ react.createElement(components_PrivateRoute, { path: "/", component: AuthenticatedApp }), /* @__PURE__ */ react.createElement(react_router_dom_min.Route, { path: "", component: NotFoundPage["default"] }))));
}
/* harmony default export */ const pages_App = (App);

;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/logo_strapi_auth_v4.png
const logo_strapi_auth_v4_namespaceObject = __webpack_require__.p + "fde9b1ad0670d29a2516.png";
;// CONCATENATED MODULE: ./.cache/admin/src/assets/images/logo_strapi_menu.png
const logo_strapi_menu_namespaceObject = __webpack_require__.p + "15026a3d58aeb2828134.png";
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var react_query_lib = __webpack_require__(41337);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var react_redux_lib = __webpack_require__(67467);
// EXTERNAL MODULE: ./.cache/admin/src/contexts/index.js + 4 modules
var contexts = __webpack_require__(19781);
;// CONCATENATED MODULE: ./.cache/admin/src/components/ConfigurationsProvider/reducer.js

const reducer_initialState = {
  menuLogo: null
};
const reducer_reducer = (state = reducer_initialState, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "UPDATE_PROJECT_SETTINGS": {
      Object.assign(draftState, action.values);
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const ConfigurationsProvider_reducer = (reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/components/ConfigurationsProvider/index.js




const ConfigurationsProvider = ({
  children,
  authLogo,
  menuLogo: defaultMenuLogo,
  showReleaseNotification,
  showTutorials
}) => {
  const [{ menuLogo }, dispatch] = (0,react.useReducer)(ConfigurationsProvider_reducer, reducer_initialState);
  const updateProjectSettings = ({ menuLogo: menuLogo2 }) => {
    return dispatch({
      type: "UPDATE_PROJECT_SETTINGS",
      values: {
        menuLogo: menuLogo2 || defaultMenuLogo
      }
    });
  };
  const updateProjectSettingsRef = (0,react.useRef)(updateProjectSettings);
  const configurationValue = (0,react.useMemo)(() => {
    return {
      logos: {
        menu: { custom: menuLogo, default: defaultMenuLogo },
        auth: { custom: null, default: authLogo }
      },
      updateProjectSettings: updateProjectSettingsRef.current,
      showReleaseNotification,
      showTutorials
    };
  }, [
    authLogo,
    menuLogo,
    showReleaseNotification,
    showTutorials,
    updateProjectSettingsRef,
    defaultMenuLogo
  ]);
  return /* @__PURE__ */ react.createElement(contexts/* ConfigurationsContext */.tm.Provider, { value: configurationValue }, children);
};
ConfigurationsProvider.propTypes = {
  authLogo: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).element.isRequired,
  menuLogo: (prop_types_default()).string.isRequired,
  showReleaseNotification: (prop_types_default()).bool.isRequired,
  showTutorials: (prop_types_default()).bool.isRequired
};
/* harmony default export */ const components_ConfigurationsProvider = (ConfigurationsProvider);

// EXTERNAL MODULE: ./node_modules/lodash/defaultsDeep.js
var defaultsDeep = __webpack_require__(74354);
var defaultsDeep_default = /*#__PURE__*/__webpack_require__.n(defaultsDeep);
// EXTERNAL MODULE: ./.cache/admin/src/components/LocalesProvider/context.js
var context = __webpack_require__(41282);
;// CONCATENATED MODULE: ./.cache/admin/src/components/LocalesProvider/index.js



const LocalesProvider = ({ changeLocale, children, localeNames, messages }) => {
  return /* @__PURE__ */ react.createElement(context/* default */.A.Provider, { value: { changeLocale, localeNames, messages } }, children);
};
LocalesProvider.propTypes = {
  changeLocale: (prop_types_default()).func.isRequired,
  children: (prop_types_default()).element.isRequired,
  localeNames: (prop_types_default()).object.isRequired,
  messages: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_LocalesProvider = (LocalesProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/components/LanguageProvider/utils/localStorageKey.js
const localStorageKey = "strapi-admin-language";
/* harmony default export */ const utils_localStorageKey = (localStorageKey);

;// CONCATENATED MODULE: ./.cache/admin/src/components/LanguageProvider/init.js

const init_init = (localeNames) => {
  const languageFromLocaleStorage = window.localStorage.getItem(utils_localStorageKey);
  const appLanguage = localeNames[languageFromLocaleStorage] ? languageFromLocaleStorage : "en";
  return {
    locale: appLanguage,
    localeNames
  };
};
/* harmony default export */ const LanguageProvider_init = (init_init);

;// CONCATENATED MODULE: ./.cache/admin/src/components/LanguageProvider/reducer.js
var reducer_defProp = Object.defineProperty;
var reducer_defProps = Object.defineProperties;
var reducer_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var reducer_getOwnPropSymbols = Object.getOwnPropertySymbols;
var reducer_hasOwnProp = Object.prototype.hasOwnProperty;
var reducer_propIsEnum = Object.prototype.propertyIsEnumerable;
var reducer_defNormalProp = (obj, key, value) => key in obj ? reducer_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var reducer_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (reducer_hasOwnProp.call(b, prop))
      reducer_defNormalProp(a, prop, b[prop]);
  if (reducer_getOwnPropSymbols)
    for (var prop of reducer_getOwnPropSymbols(b)) {
      if (reducer_propIsEnum.call(b, prop))
        reducer_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var reducer_spreadProps = (a, b) => reducer_defProps(a, reducer_getOwnPropDescs(b));
const LanguageProvider_reducer_initialState = {
  localeNames: { en: "English" },
  locale: "en"
};
const languageProviderReducer = (state = LanguageProvider_reducer_initialState, action) => {
  switch (action.type) {
    case "CHANGE_LOCALE": {
      const { locale } = action;
      if (!state.localeNames[locale]) {
        return state;
      }
      return reducer_spreadProps(reducer_spreadValues({}, state), { locale });
    }
    default: {
      return state;
    }
  }
};
/* harmony default export */ const LanguageProvider_reducer = (languageProviderReducer);


;// CONCATENATED MODULE: ./.cache/admin/src/components/LanguageProvider/index.js








const LanguageProvider = ({ children, localeNames, messages }) => {
  const [{ locale }, dispatch] = (0,react.useReducer)(LanguageProvider_reducer, LanguageProvider_reducer_initialState, () => LanguageProvider_init(localeNames));
  (0,react.useEffect)(() => {
    window.localStorage.setItem(utils_localStorageKey, locale);
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);
  const changeLocale = (locale2) => {
    dispatch({
      type: "CHANGE_LOCALE",
      locale: locale2
    });
  };
  const appMessages = defaultsDeep_default()(messages[locale], messages.en);
  return /* @__PURE__ */ react.createElement(react_intl.IntlProvider, { locale, defaultLocale: "en", messages: appMessages, textComponent: "span" }, /* @__PURE__ */ react.createElement(components_LocalesProvider, { changeLocale, localeNames, messages: appMessages }, children));
};
LanguageProvider.propTypes = {
  children: (prop_types_default()).element.isRequired,
  localeNames: prop_types_default().objectOf((prop_types_default()).string).isRequired,
  messages: (prop_types_default()).object.isRequired
};
/* harmony default export */ const components_LanguageProvider = (LanguageProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/arePreviousSectionsDone.js
const arePreviousSectionsDone = (sectionName, guidedTourState) => {
  const guidedTourArray = Object.entries(guidedTourState);
  const currentSectionIndex = guidedTourArray.findIndex(([key]) => key === sectionName);
  const previousSections = guidedTourArray.slice(0, currentSectionIndex);
  return previousSections.every(([, sectionValue]) => Object.values(sectionValue).every(Boolean));
};
/* harmony default export */ const utils_arePreviousSectionsDone = (arePreviousSectionsDone);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/utils/arePreviousStepsDone.js
const arePreviousStepsDone = (step, guidedTourState) => {
  const stepSplit = step.split(".");
  const stepName = stepSplit[1];
  const sectionArray = Object.entries(guidedTourState[stepSplit[0]]);
  const currentStepIndex = sectionArray.findIndex(([key]) => key === stepName);
  const previousSteps = sectionArray.slice(0, currentStepIndex);
  return previousSteps.every(([, sectionValue]) => sectionValue);
};
/* harmony default export */ const utils_arePreviousStepsDone = (arePreviousStepsDone);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/reducer.js

const GuidedTour_reducer_initialState = {
  currentStep: null,
  guidedTourState: {
    contentTypeBuilder: {
      create: false,
      success: false
    },
    contentManager: {
      create: false,
      success: false
    },
    apiTokens: {
      create: false,
      success: false
    }
  },
  isGuidedTourVisible: false,
  isSkipped: true
};
const GuidedTour_reducer_reducer = (state = GuidedTour_reducer_initialState, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "SET_CURRENT_STEP": {
      draftState.currentStep = action.step;
      break;
    }
    case "SET_STEP_STATE": {
      const [section, step] = action.currentStep.split(".");
      draftState.guidedTourState[section][step] = action.value;
      break;
    }
    case "SET_SKIPPED": {
      draftState.isSkipped = action.value;
      break;
    }
    case "SET_GUIDED_TOUR_VISIBILITY": {
      draftState.isGuidedTourVisible = action.value;
      break;
    }
    default: {
      return draftState;
    }
  }
});
/* harmony default export */ const GuidedTour_reducer = (GuidedTour_reducer_reducer);

// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(63560);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/init.js
var init_defProp = Object.defineProperty;
var init_getOwnPropSymbols = Object.getOwnPropertySymbols;
var init_hasOwnProp = Object.prototype.hasOwnProperty;
var init_propIsEnum = Object.prototype.propertyIsEnumerable;
var init_defNormalProp = (obj, key, value) => key in obj ? init_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var init_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (init_hasOwnProp.call(b, prop))
      init_defNormalProp(a, prop, b[prop]);
  if (init_getOwnPropSymbols)
    for (var prop of init_getOwnPropSymbols(b)) {
      if (init_propIsEnum.call(b, prop))
        init_defNormalProp(a, prop, b[prop]);
    }
  return a;
};


const GuidedTour_init_init = (initialState) => {
  const copyInitialState = init_spreadValues({}, initialState);
  const guidedTourLocaleStorage = utils_persistStateToLocaleStorage.get(COMPLETED_STEPS);
  const currentStepLocaleStorage = utils_persistStateToLocaleStorage.get(CURRENT_STEP);
  const skippedLocaleStorage = utils_persistStateToLocaleStorage.get(SKIPPED);
  if (guidedTourLocaleStorage) {
    guidedTourLocaleStorage.forEach((step) => {
      const [sectionName, stepName] = step.split(".");
      set_default()(copyInitialState, ["guidedTourState", sectionName, stepName], true);
    });
  }
  if (currentStepLocaleStorage) {
    const [sectionName, stepName] = currentStepLocaleStorage.split(".");
    set_default()(copyInitialState, ["guidedTourState", sectionName, stepName], true);
    utils_persistStateToLocaleStorage.addCompletedStep(currentStepLocaleStorage);
    utils_persistStateToLocaleStorage.addCurrentStep(null);
  }
  if (skippedLocaleStorage !== null) {
    set_default()(copyInitialState, "isSkipped", skippedLocaleStorage);
  }
  return copyInitialState;
};
/* harmony default export */ const GuidedTour_init = (GuidedTour_init_init);

;// CONCATENATED MODULE: ./.cache/admin/src/components/GuidedTour/index.js









const GuidedTour = ({ children }) => {
  const [{ currentStep, guidedTourState, isGuidedTourVisible, isSkipped }, dispatch] = (0,react.useReducer)(
    GuidedTour_reducer,
    GuidedTour_reducer_initialState,
    GuidedTour_init
  );
  const setCurrentStep = (step) => {
    if (step !== null) {
      const isStepAlreadyDone = get_default()(guidedTourState, step);
      const isStepToShow = utils_arePreviousStepsDone(step, guidedTourState);
      if (isStepAlreadyDone || isSkipped || !isStepToShow) {
        return null;
      }
    }
    utils_persistStateToLocaleStorage.addCurrentStep(step);
    return dispatch({
      type: "SET_CURRENT_STEP",
      step
    });
  };
  const setGuidedTourVisibility = (value) => {
    dispatch({
      type: "SET_GUIDED_TOUR_VISIBILITY",
      value
    });
  };
  const setStepState = (currentStep2, value) => {
    utils_persistStateToLocaleStorage.addCompletedStep(currentStep2);
    dispatch({
      type: "SET_STEP_STATE",
      currentStep: currentStep2,
      value
    });
  };
  const startSection = (sectionName) => {
    const sectionSteps = guidedTourState[sectionName];
    if (sectionSteps) {
      const isSectionToShow = utils_arePreviousSectionsDone(sectionName, guidedTourState);
      const firstStep = Object.keys(sectionSteps)[0];
      const isFirstStepDone = sectionSteps[firstStep];
      if (isSectionToShow && !currentStep && !isFirstStepDone) {
        return setCurrentStep(`${sectionName}.${firstStep}`);
      }
    }
    return null;
  };
  const setSkipped = (value) => {
    utils_persistStateToLocaleStorage.setSkipped(value);
    dispatch({
      type: "SET_SKIPPED",
      value
    });
  };
  return /* @__PURE__ */ react.createElement(
    build.GuidedTourProvider,
    {
      guidedTourState,
      currentStep,
      setCurrentStep,
      setGuidedTourVisibility,
      setSkipped,
      setStepState,
      startSection,
      isGuidedTourVisible,
      isSkipped
    },
    children
  );
};
GuidedTour.propTypes = {
  children: (prop_types_default()).element.isRequired
};
/* harmony default export */ const components_GuidedTour = (GuidedTour);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Clock.js
var Clock = __webpack_require__(42505);
var Clock_default = /*#__PURE__*/__webpack_require__.n(Clock);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Refresh.js
var Refresh = __webpack_require__(99440);
var Refresh_default = /*#__PURE__*/__webpack_require__.n(Refresh);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/v2/Link.js
var Link = __webpack_require__(59120);
;// CONCATENATED MODULE: ./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/Overlay.js




const Overlay = (0,styled_components_browser_cjs["default"])((0,Box.Box))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1140;
  &:before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.neutral0};
    opacity: 0.9;
  }
`;
const Content = (0,styled_components_browser_cjs["default"])((0,Stack.Stack))`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: ${(0,build.pxToRem)(160)};
`;
const IconBox = (0,styled_components_browser_cjs["default"])((0,Box.Box))`
  border-radius: 50%;
  svg {
    > path {
      fill: ${({ theme }) => theme.colors.primary600} !important;
    }
  }
`;


;// CONCATENATED MODULE: ./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/Blocker.js














const overlayContainer = document.createElement("div");
const ID = "autoReloadOverlayBlocker";
overlayContainer.setAttribute("id", ID);
const rotation = (0,styled_components_browser_cjs.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const LoaderReload = (0,styled_components_browser_cjs["default"])(Refresh_default())`
  animation: ${rotation} 1s infinite linear;
`;
const Blocker = ({ displayedIcon, description, title, isOpen }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  (0,react.useEffect)(() => {
    document.body.appendChild(overlayContainer);
    return () => {
      document.body.removeChild(overlayContainer);
    };
  }, []);
  if (isOpen) {
    return react_dom.createPortal(
      /* @__PURE__ */ react.createElement(Overlay, null, /* @__PURE__ */ react.createElement(Content, { spacing: 6 }, /* @__PURE__ */ react.createElement(Stack.Stack, { spacing: 2 }, /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography.Typography, { as: "h1", variant: "alpha" }, formatMessage(title))), /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Typography.Typography, { as: "h2", textColor: "neutral600", fontSize: 4, fontWeight: "regular" }, formatMessage(description)))), /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, displayedIcon === "reload" && /* @__PURE__ */ react.createElement(IconBox, { padding: 6, background: "primary100", borderColor: "primary200" }, /* @__PURE__ */ react.createElement(LoaderReload, { width: (0,build.pxToRem)(36), height: (0,build.pxToRem)(36) })), displayedIcon === "time" && /* @__PURE__ */ react.createElement(IconBox, { padding: 6, background: "primary100", borderColor: "primary200" }, /* @__PURE__ */ react.createElement((Clock_default()), { width: (0,build.pxToRem)(40), height: (0,build.pxToRem)(40) }))), /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 2 }, /* @__PURE__ */ react.createElement(Link.Link, { href: "https://docs.strapi.io", isExternal: true }, formatMessage({
        id: "global.documentation",
        defaultMessage: "Read the documentation"
      })))))),
      overlayContainer
    );
  }
  return null;
};
Blocker.propTypes = {
  displayedIcon: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).array]).isRequired,
  description: (prop_types_default()).object.isRequired,
  isOpen: (prop_types_default()).bool.isRequired,
  title: (prop_types_default()).object.isRequired
};
/* harmony default export */ const AutoReloadOverlayBlockerProvider_Blocker = (Blocker);

;// CONCATENATED MODULE: ./.cache/admin/src/components/AutoReloadOverlayBlockerProvider/index.js
var AutoReloadOverlayBlockerProvider_defProp = Object.defineProperty;
var AutoReloadOverlayBlockerProvider_defProps = Object.defineProperties;
var AutoReloadOverlayBlockerProvider_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var AutoReloadOverlayBlockerProvider_getOwnPropSymbols = Object.getOwnPropertySymbols;
var AutoReloadOverlayBlockerProvider_hasOwnProp = Object.prototype.hasOwnProperty;
var AutoReloadOverlayBlockerProvider_propIsEnum = Object.prototype.propertyIsEnumerable;
var AutoReloadOverlayBlockerProvider_defNormalProp = (obj, key, value) => key in obj ? AutoReloadOverlayBlockerProvider_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var AutoReloadOverlayBlockerProvider_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (AutoReloadOverlayBlockerProvider_hasOwnProp.call(b, prop))
      AutoReloadOverlayBlockerProvider_defNormalProp(a, prop, b[prop]);
  if (AutoReloadOverlayBlockerProvider_getOwnPropSymbols)
    for (var prop of AutoReloadOverlayBlockerProvider_getOwnPropSymbols(b)) {
      if (AutoReloadOverlayBlockerProvider_propIsEnum.call(b, prop))
        AutoReloadOverlayBlockerProvider_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var AutoReloadOverlayBlockerProvider_spreadProps = (a, b) => AutoReloadOverlayBlockerProvider_defProps(a, AutoReloadOverlayBlockerProvider_getOwnPropDescs(b));




const ELAPSED = 30;
const AutoReloadOverlayBlockerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const [{ elapsed }, setState] = (0,react.useState)({ elapsed: 0, start: 0 });
  const [config, setConfig] = (0,react.useState)(void 0);
  const lockAppWithAutoreload = (config2 = void 0) => {
    setIsOpen(true);
    setConfig(config2);
    setState((prev) => AutoReloadOverlayBlockerProvider_spreadProps(AutoReloadOverlayBlockerProvider_spreadValues({}, prev), { start: Date.now() }));
  };
  const unlockAppWithAutoreload = () => {
    setIsOpen(false);
    setState({ start: 0, elapsed: 0 });
    setConfig(void 0);
  };
  const lockApp = (0,react.useRef)(lockAppWithAutoreload);
  const unlockApp = (0,react.useRef)(unlockAppWithAutoreload);
  (0,react.useEffect)(() => {
    let timer = null;
    if (isOpen) {
      timer = setInterval(() => {
        if (elapsed > ELAPSED) {
          clearInterval(timer);
          return null;
        }
        setState((prev) => AutoReloadOverlayBlockerProvider_spreadProps(AutoReloadOverlayBlockerProvider_spreadValues({}, prev), { elapsed: Math.round(Date.now() - prev.start) / 1e3 }));
        return null;
      }, 1e3);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isOpen, elapsed]);
  let displayedIcon = (config == null ? void 0 : config.icon) || "reload";
  let description = {
    id: (config == null ? void 0 : config.description) || "components.OverlayBlocker.description",
    defaultMessage: "You're using a feature that needs the server to restart. Please wait until the server is up."
  };
  let title = {
    id: (config == null ? void 0 : config.title) || "components.OverlayBlocker.title",
    defaultMessage: "Waiting for restart"
  };
  if (elapsed > ELAPSED) {
    displayedIcon = "time";
    description = {
      id: "components.OverlayBlocker.description.serverError",
      defaultMessage: "The server should have restarted, please check your logs in the terminal."
    };
    title = {
      id: "components.OverlayBlocker.title.serverError",
      defaultMessage: "The restart is taking longer than expected"
    };
  }
  const autoReloadValue = (0,react.useMemo)(() => {
    return { lockApp: lockApp.current, unlockApp: unlockApp.current };
  }, [lockApp, unlockApp]);
  return /* @__PURE__ */ react.createElement(build.AutoReloadOverlayBockerContext.Provider, { value: autoReloadValue }, /* @__PURE__ */ react.createElement(
    AutoReloadOverlayBlockerProvider_Blocker,
    {
      displayedIcon,
      isOpen,
      description,
      title
    }
  ), children);
};
AutoReloadOverlayBlockerProvider.propTypes = {
  children: (prop_types_default()).element.isRequired
};
/* harmony default export */ const components_AutoReloadOverlayBlockerProvider = (AutoReloadOverlayBlockerProvider);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Alert.js
var Alert = __webpack_require__(78751);
;// CONCATENATED MODULE: ./.cache/admin/src/components/Notifications/Notification/index.js





const Notification = ({ dispatch, notification }) => {
  var _a, _b, _c;
  const { formatMessage } = (0,react_intl.useIntl)();
  const { message, link, type, id, onClose, timeout, blockTransition } = notification;
  const formattedMessage = (msg) => typeof msg === "string" ? msg : formatMessage(msg, msg.values);
  const handleClose = (0,react.useCallback)(() => {
    if (onClose) {
      onClose();
    }
    dispatch({
      type: "HIDE_NOTIFICATION",
      id
    });
  }, [id]);
  (0,react.useEffect)(() => {
    let timeoutToClear;
    if (!blockTransition) {
      timeoutToClear = setTimeout(() => {
        handleClose();
      }, timeout || 2500);
    }
    return () => clearTimeout(timeoutToClear);
  }, [blockTransition, handleClose, timeout]);
  let variant;
  let alertTitle;
  if (type === "info") {
    variant = "default";
    alertTitle = formatMessage({
      id: "notification.default.title",
      defaultMessage: "Information:"
    });
  } else if (type === "warning") {
    alertTitle = formatMessage({
      id: "notification.warning.title",
      defaultMessage: "Warning:"
    });
    variant = "danger";
  } else {
    alertTitle = formatMessage({
      id: "notification.success.title",
      defaultMessage: "Success:"
    });
    variant = "success";
  }
  return /* @__PURE__ */ react.createElement(
    Alert.Alert,
    {
      action: link ? /* @__PURE__ */ react.createElement(Link.Link, { href: link.url, isExternal: true }, formatMessage({
        id: ((_a = link.label) == null ? void 0 : _a.id) || link.label,
        defaultMessage: ((_b = link.label) == null ? void 0 : _b.defaultMessage) || ((_c = link.label) == null ? void 0 : _c.id) || link.label
      })) : void 0,
      onClose: handleClose,
      closeLabel: "Close",
      title: alertTitle,
      variant
    },
    formattedMessage({
      id: (message == null ? void 0 : message.id) || message,
      defaultMessage: (message == null ? void 0 : message.defaultMessage) || (message == null ? void 0 : message.id) || message
    })
  );
};
Notification.defaultProps = {
  notification: {
    id: 1,
    type: "success",
    message: {
      id: "notification.success.saved",
      defaultMessage: "Saved"
    },
    onClose: () => null,
    timeout: 2500,
    blockTransition: false
  }
};
Notification.propTypes = {
  dispatch: (prop_types_default()).func.isRequired,
  notification: prop_types_default().shape({
    id: (prop_types_default()).number,
    message: prop_types_default().oneOfType([
      (prop_types_default()).string,
      prop_types_default().shape({
        id: (prop_types_default()).string.isRequired,
        defaultMessage: (prop_types_default()).string,
        values: (prop_types_default()).object
      })
    ]),
    link: prop_types_default().shape({
      target: (prop_types_default()).string,
      url: (prop_types_default()).string.isRequired,
      label: prop_types_default().oneOfType([
        (prop_types_default()).string,
        prop_types_default().shape({
          id: (prop_types_default()).string.isRequired,
          defaultMessage: (prop_types_default()).string,
          values: (prop_types_default()).object
        })
      ]).isRequired
    }),
    type: (prop_types_default()).string,
    onClose: (prop_types_default()).func,
    timeout: (prop_types_default()).number,
    blockTransition: (prop_types_default()).bool
  })
};
/* harmony default export */ const Notifications_Notification = (Notification);

;// CONCATENATED MODULE: ./.cache/admin/src/components/Notifications/reducer.js


const Notifications_reducer_initialState = {
  notifId: 0,
  notifications: []
};
const notificationReducer = (state = Notifications_reducer_initialState, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_cjs_production_min["default"])(state, (draftState) => {
    switch (action.type) {
      case "SHOW_NOTIFICATION": {
        draftState.notifications.push({
          // No action.config spread to limit the notification API and avoid customization
          id: state.notifId,
          type: get_default()(action, ["config", "type"], "success"),
          message: get_default()(action, ["config", "message"], {
            id: "notification.success.saved",
            defaultMessage: "Saved"
          }),
          link: get_default()(action, ["config", "link"], null),
          timeout: get_default()(action, ["config", "timeout"], 2500),
          blockTransition: get_default()(action, ["config", "blockTransition"], false),
          onClose: get_default()(action, ["config", "onClose"], null)
        });
        draftState.notifId = state.notifId + 1;
        break;
      }
      case "HIDE_NOTIFICATION": {
        const indexToRemove = state.notifications.findIndex((notif) => notif.id === action.id);
        if (indexToRemove !== -1) {
          draftState.notifications.splice(indexToRemove, 1);
        }
        break;
      }
      default: {
        return draftState;
      }
    }
  })
);
/* harmony default export */ const Notifications_reducer = (notificationReducer);


;// CONCATENATED MODULE: ./.cache/admin/src/components/Notifications/index.js






const Notifications = ({ children }) => {
  const [{ notifications }, dispatch] = (0,react.useReducer)(Notifications_reducer, Notifications_reducer_initialState);
  const displayNotification = (config) => {
    dispatch({
      type: "SHOW_NOTIFICATION",
      config
    });
  };
  return /* @__PURE__ */ react.createElement(build.NotificationsProvider, { toggleNotification: displayNotification }, /* @__PURE__ */ react.createElement(
    Stack.Stack,
    {
      left: "50%",
      marginLeft: "-250px",
      position: "fixed",
      spacing: 2,
      top: `${46 / 16}rem`,
      width: `${500 / 16}rem`,
      zIndex: 10
    },
    notifications.map((notification) => {
      return /* @__PURE__ */ react.createElement(Notifications_Notification, { key: notification.id, dispatch, notification });
    })
  ), children);
};
Notifications.propTypes = {
  children: (prop_types_default()).element.isRequired
};
/* harmony default export */ const components_Notifications = (Notifications);

;// CONCATENATED MODULE: ./.cache/admin/src/components/OverlayBlocker/index.js





const OverlayBlocker_overlayContainer = document.createElement("div");
OverlayBlocker_overlayContainer.setAttribute("id", "overlayBlocker");
const OverlayBlocker_Overlay = styled_components_browser_cjs["default"].div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1140;
`;
const Portal = ({ isOpen }) => {
  (0,react.useEffect)(() => {
    document.body.appendChild(OverlayBlocker_overlayContainer);
    return () => {
      document.body.removeChild(OverlayBlocker_overlayContainer);
    };
  }, []);
  if (isOpen) {
    return react_dom.createPortal(/* @__PURE__ */ react.createElement(OverlayBlocker_Overlay, null), OverlayBlocker_overlayContainer);
  }
  return null;
};
Portal.propTypes = {
  isOpen: (prop_types_default()).bool.isRequired
};
const OverlayBlockerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const lockApp = () => {
    setIsOpen(true);
  };
  const unlockApp = () => {
    setIsOpen(false);
  };
  return /* @__PURE__ */ react.createElement(build.OverlayBlockerContext.Provider, { value: { lockApp, unlockApp } }, children, /* @__PURE__ */ react.createElement(Portal, { isOpen }));
};
OverlayBlockerProvider.propTypes = {
  children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const OverlayBlocker = (OverlayBlockerProvider);

;// CONCATENATED MODULE: ./.cache/admin/src/components/ThemeToggleProvider/index.js



const THEME_KEY = "STRAPI_THEME";
const getDefaultTheme = () => {
  const browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const persistedTheme = localStorage.getItem(THEME_KEY);
  if (!persistedTheme) {
    localStorage.setItem(THEME_KEY, browserTheme);
  }
  return persistedTheme || browserTheme;
};
const ThemeToggleProvider = ({ children, themes }) => {
  const [currentTheme, setCurrentTheme] = (0,react.useState)(getDefaultTheme());
  const handleChangeTheme = (0,react.useCallback)(
    (nextTheme) => {
      setCurrentTheme(nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
    },
    [setCurrentTheme]
  );
  const themeValues = (0,react.useMemo)(() => {
    return {
      currentTheme,
      onChangeTheme: handleChangeTheme,
      themes
    };
  }, [currentTheme, handleChangeTheme, themes]);
  return /* @__PURE__ */ react.createElement(contexts/* ThemeToggleContext */.ZY.Provider, { value: themeValues }, children);
};
ThemeToggleProvider.propTypes = {
  children: (prop_types_default()).node.isRequired,
  themes: prop_types_default().shape({
    light: prop_types_default().shape({
      colors: (prop_types_default()).object.isRequired,
      shadows: (prop_types_default()).object.isRequired,
      sizes: (prop_types_default()).object.isRequired,
      zIndices: (prop_types_default()).array.isRequired,
      spaces: (prop_types_default()).array.isRequired,
      borderRadius: (prop_types_default()).string.isRequired,
      mediaQueries: (prop_types_default()).object.isRequired,
      fontSizes: (prop_types_default()).array.isRequired,
      lineHeights: (prop_types_default()).array.isRequired,
      fontWeights: (prop_types_default()).object.isRequired
    }).isRequired,
    dark: prop_types_default().shape({
      colors: (prop_types_default()).object.isRequired,
      shadows: (prop_types_default()).object.isRequired,
      sizes: (prop_types_default()).object.isRequired,
      zIndices: (prop_types_default()).array.isRequired,
      spaces: (prop_types_default()).array.isRequired,
      borderRadius: (prop_types_default()).string.isRequired,
      mediaQueries: (prop_types_default()).object.isRequired,
      fontSizes: (prop_types_default()).array.isRequired,
      lineHeights: (prop_types_default()).array.isRequired,
      fontWeights: (prop_types_default()).object.isRequired
    }).isRequired,
    custom: (prop_types_default()).object
  }).isRequired
};
/* harmony default export */ const components_ThemeToggleProvider = (ThemeToggleProvider);

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/ThemeProvider.js
var ThemeProvider = __webpack_require__(28973);
;// CONCATENATED MODULE: ./.cache/admin/src/components/GlobalStyle/index.js
var GlobalStyle_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const loadCss = () => GlobalStyle_async(void 0, null, function* () {
  yield __webpack_require__.e(/* import() | fontawesome-css */ 3351).then(__webpack_require__.bind(__webpack_require__, 79488));
  yield __webpack_require__.e(/* import() | fontawesome-css-all */ 3993).then(__webpack_require__.bind(__webpack_require__, 56400));
  yield __webpack_require__.e(/* import() | fontawesome-js */ 4983).then(__webpack_require__.t.bind(__webpack_require__, 28654, 23));
  yield __webpack_require__.e(/* import() | cropper-css */ 9372).then(__webpack_require__.bind(__webpack_require__, 50837));
});
loadCss();
const GlobalStyle = (0,styled_components_browser_cjs.createGlobalStyle)`
  body {
    background: ${({ theme }) => theme.colors.neutral100};
  }
`;
/* harmony default export */ const components_GlobalStyle = (GlobalStyle);

;// CONCATENATED MODULE: ./.cache/admin/src/components/Theme/index.js





const Theme = ({ children }) => {
  const { currentTheme, themes } = (0,hooks/* useThemeToggle */.fD)();
  return /* @__PURE__ */ react.createElement(ThemeProvider.ThemeProvider, { theme: themes[currentTheme] || themes.light }, children, /* @__PURE__ */ react.createElement(components_GlobalStyle, null));
};
Theme.propTypes = {
  children: (prop_types_default()).element.isRequired
};
/* harmony default export */ const components_Theme = (Theme);

;// CONCATENATED MODULE: ./.cache/admin/src/components/Providers/index.js














const queryClient = new react_query_lib.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
const Providers = ({
  authLogo,
  children,
  components,
  customFields,
  fields,
  getAdminInjectedComponents,
  getPlugin,
  localeNames,
  menu,
  menuLogo,
  messages,
  plugins,
  runHookParallel,
  runHookSeries,
  runHookWaterfall,
  settings,
  showReleaseNotification,
  showTutorials,
  store,
  themes
}) => {
  return /* @__PURE__ */ react.createElement(components_ThemeToggleProvider, { themes }, /* @__PURE__ */ react.createElement(components_Theme, null, /* @__PURE__ */ react.createElement(react_query_lib.QueryClientProvider, { client: queryClient }, /* @__PURE__ */ react.createElement(react_redux_lib.Provider, { store }, /* @__PURE__ */ react.createElement(contexts/* AdminContext */.tl.Provider, { value: { getAdminInjectedComponents } }, /* @__PURE__ */ react.createElement(
    components_ConfigurationsProvider,
    {
      authLogo,
      menuLogo,
      showReleaseNotification,
      showTutorials
    },
    /* @__PURE__ */ react.createElement(
      build.StrapiAppProvider,
      {
        getPlugin,
        menu,
        plugins,
        runHookParallel,
        runHookWaterfall,
        runHookSeries,
        settings
      },
      /* @__PURE__ */ react.createElement(build.LibraryProvider, { components, fields }, /* @__PURE__ */ react.createElement(build.CustomFieldsProvider, { customFields }, /* @__PURE__ */ react.createElement(components_LanguageProvider, { messages, localeNames }, /* @__PURE__ */ react.createElement(components_AutoReloadOverlayBlockerProvider, null, /* @__PURE__ */ react.createElement(OverlayBlocker, null, /* @__PURE__ */ react.createElement(components_GuidedTour, null, /* @__PURE__ */ react.createElement(components_Notifications, null, children)))))))
    )
  ))))));
};
Providers.propTypes = {
  authLogo: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).any]).isRequired,
  children: (prop_types_default()).element.isRequired,
  components: (prop_types_default()).object.isRequired,
  customFields: (prop_types_default()).object.isRequired,
  fields: (prop_types_default()).object.isRequired,
  getAdminInjectedComponents: (prop_types_default()).func.isRequired,
  getPlugin: (prop_types_default()).func.isRequired,
  localeNames: prop_types_default().objectOf((prop_types_default()).string).isRequired,
  menu: prop_types_default().arrayOf(
    prop_types_default().shape({
      to: (prop_types_default()).string.isRequired,
      icon: (prop_types_default()).func.isRequired,
      intlLabel: prop_types_default().shape({
        id: (prop_types_default()).string.isRequired,
        defaultMessage: (prop_types_default()).string.isRequired
      }).isRequired,
      permissions: (prop_types_default()).array,
      Component: (prop_types_default()).func
    })
  ).isRequired,
  menuLogo: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).any]).isRequired,
  messages: (prop_types_default()).object.isRequired,
  plugins: (prop_types_default()).object.isRequired,
  runHookParallel: (prop_types_default()).func.isRequired,
  runHookWaterfall: (prop_types_default()).func.isRequired,
  runHookSeries: (prop_types_default()).func.isRequired,
  settings: (prop_types_default()).object.isRequired,
  showReleaseNotification: (prop_types_default()).bool.isRequired,
  showTutorials: (prop_types_default()).bool.isRequired,
  store: (prop_types_default()).object.isRequired,
  themes: prop_types_default().shape({
    light: prop_types_default().shape({
      colors: (prop_types_default()).object.isRequired,
      shadows: (prop_types_default()).object.isRequired,
      sizes: (prop_types_default()).object.isRequired,
      zIndices: (prop_types_default()).array.isRequired,
      spaces: (prop_types_default()).array.isRequired,
      borderRadius: (prop_types_default()).string.isRequired,
      mediaQueries: (prop_types_default()).object.isRequired,
      fontSizes: (prop_types_default()).array.isRequired,
      lineHeights: (prop_types_default()).array.isRequired,
      fontWeights: (prop_types_default()).object.isRequired
    }).isRequired,
    dark: prop_types_default().shape({
      colors: (prop_types_default()).object.isRequired,
      shadows: (prop_types_default()).object.isRequired,
      sizes: (prop_types_default()).object.isRequired,
      zIndices: (prop_types_default()).array.isRequired,
      spaces: (prop_types_default()).array.isRequired,
      borderRadius: (prop_types_default()).string.isRequired,
      mediaQueries: (prop_types_default()).object.isRequired,
      fontSizes: (prop_types_default()).array.isRequired,
      lineHeights: (prop_types_default()).array.isRequired,
      fontWeights: (prop_types_default()).object.isRequired
    }).isRequired,
    custom: (prop_types_default()).object
  }).isRequired
};
/* harmony default export */ const components_Providers = (Providers);

;// CONCATENATED MODULE: ./.cache/admin/src/translations/languageNativeNames.js
const languageNativeNames = {
  ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
  ca: "Catal\xE0",
  cs: "\u010Ce\u0161tina",
  de: "Deutsch",
  dk: "Dansk",
  en: "English",
  es: "Espa\xF1ol",
  fr: "Fran\xE7ais",
  gu: "Gujarati",
  he: "\u05E2\u05D1\u05E8\u05D9\u05EA",
  hu: "Magyar",
  id: "Indonesian",
  it: "Italiano",
  ja: "\u65E5\u672C\u8A9E",
  ko: "\uD55C\uAD6D\uC5B4",
  ml: "Malayalam",
  ms: "Melayu",
  nl: "Nederlands",
  no: "Norwegian",
  pl: "Polski",
  "pt-BR": "Portugu\xEAs (Brasil)",
  pt: "Portugu\xEAs (Portugal)",
  ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
  sk: "Sloven\u010Dina",
  sv: "Swedish",
  th: "\u0E44\u0E17\u0E22",
  tr: "T\xFCrk\xE7e",
  uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
  vi: "Ti\u1EBFng Vi\u1EC7t",
  "zh-Hans": "\u4E2D\u6587 (\u7B80\u4F53)",
  zh: "\u4E2D\u6587 (\u7E41\u9AD4)",
  sa: "\u0938\u0902\u0938\u094D\u0915\u0943\u0924",
  hi: "\u0939\u093F\u0928\u094D\u0926\u0940"
};
/* harmony default export */ const translations_languageNativeNames = (languageNativeNames);

// EXTERNAL MODULE: ./.cache/admin/src/exposedHooks.js
var exposedHooks = __webpack_require__(39683);
;// CONCATENATED MODULE: ./.cache/admin/src/injectionZones.js
const injectionZones = {
  admin: {
    // Temporary injection zone, support for the react-tour plugin in foodadvisor
    tutorials: {
      links: []
    }
  },
  contentManager: {
    editView: { informations: [], "right-links": [] },
    listView: { actions: [], deleteModalAdditionalInfos: [] }
  }
};
/* harmony default export */ const src_injectionZones = (injectionZones);

;// CONCATENATED MODULE: ./.cache/admin/src/favicon.ico
const favicon_namespaceObject = __webpack_require__.p + "b997a22a2e0b87ef1fa2.ico";
;// CONCATENATED MODULE: ./.cache/admin/src/StrapiApp.js
/* provided dependency */ var StrapiApp_console = __webpack_require__(96763);
var StrapiApp_defProp = Object.defineProperty;
var StrapiApp_defProps = Object.defineProperties;
var StrapiApp_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var StrapiApp_getOwnPropSymbols = Object.getOwnPropertySymbols;
var StrapiApp_hasOwnProp = Object.prototype.hasOwnProperty;
var StrapiApp_propIsEnum = Object.prototype.propertyIsEnumerable;
var StrapiApp_defNormalProp = (obj, key, value) => key in obj ? StrapiApp_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var StrapiApp_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (StrapiApp_hasOwnProp.call(b, prop))
      StrapiApp_defNormalProp(a, prop, b[prop]);
  if (StrapiApp_getOwnPropSymbols)
    for (var prop of StrapiApp_getOwnPropSymbols(b)) {
      if (StrapiApp_propIsEnum.call(b, prop))
        StrapiApp_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var StrapiApp_spreadProps = (a, b) => StrapiApp_defProps(a, StrapiApp_getOwnPropDescs(b));
var __publicField = (obj, key, value) => {
  StrapiApp_defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var StrapiApp_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




















class StrapiApp {
  constructor({ adminConfig, appPlugins, library, middlewares, reducers }) {
    __publicField(this, "addComponents", (components) => {
      if (Array.isArray(components)) {
        components.map((compo) => this.library.components.add(compo));
      } else {
        this.library.components.add(components);
      }
    });
    __publicField(this, "addCorePluginMenuLink", (link) => {
      var _a, _b;
      const stringifiedLink = JSON.stringify(link);
      browser_default()(link.to, `link.to should be defined for ${stringifiedLink}`);
      browser_default()(
        typeof link.to === "string",
        `Expected link.to to be a string instead received ${typeof link.to}`
      );
      browser_default()(
        ["/plugins/content-type-builder", "/plugins/upload"].includes(link.to),
        "This method is not available for your plugin"
      );
      browser_default()(
        ((_a = link.intlLabel) == null ? void 0 : _a.id) && ((_b = link.intlLabel) == null ? void 0 : _b.defaultMessage),
        `link.intlLabel.id & link.intlLabel.defaultMessage for ${stringifiedLink}`
      );
      this.menu.push(link);
    });
    __publicField(this, "addFields", (fields) => {
      if (Array.isArray(fields)) {
        fields.map((field) => this.library.fields.add(field));
      } else {
        this.library.fields.add(fields);
      }
    });
    __publicField(this, "addMenuLink", (link) => {
      var _a, _b;
      const stringifiedLink = JSON.stringify(link);
      browser_default()(link.to, `link.to should be defined for ${stringifiedLink}`);
      browser_default()(
        typeof link.to === "string",
        `Expected link.to to be a string instead received ${typeof link.to}`
      );
      browser_default()(
        ((_a = link.intlLabel) == null ? void 0 : _a.id) && ((_b = link.intlLabel) == null ? void 0 : _b.defaultMessage),
        `link.intlLabel.id & link.intlLabel.defaultMessage for ${stringifiedLink}`
      );
      browser_default()(
        link.Component && typeof link.Component === "function",
        `link.Component should be a valid React Component`
      );
      browser_default()(
        link.icon && typeof link.icon === "function",
        `link.Icon should be a valid React Component`
      );
      this.menu.push(link);
    });
    __publicField(this, "addMiddlewares", (middlewares) => {
      middlewares.forEach((middleware) => {
        this.middlewares.add(middleware);
      });
    });
    __publicField(this, "addReducers", (reducers) => {
      Object.keys(reducers).forEach((reducerName) => {
        this.reducers.add(reducerName, reducers[reducerName]);
      });
    });
    __publicField(this, "addSettingsLink", (sectionId, link) => {
      var _a, _b;
      browser_default()(this.settings[sectionId], "The section does not exist");
      const stringifiedLink = JSON.stringify(link);
      browser_default()(link.id, `link.id should be defined for ${stringifiedLink}`);
      browser_default()(
        ((_a = link.intlLabel) == null ? void 0 : _a.id) && ((_b = link.intlLabel) == null ? void 0 : _b.defaultMessage),
        `link.intlLabel.id & link.intlLabel.defaultMessage for ${stringifiedLink}`
      );
      browser_default()(link.to, `link.to should be defined for ${stringifiedLink}`);
      browser_default()(
        link.Component && typeof link.Component === "function",
        `link.Component should be a valid React Component`
      );
      this.settings[sectionId].links.push(link);
    });
    __publicField(this, "addSettingsLinks", (sectionId, links) => {
      browser_default()(this.settings[sectionId], "The section does not exist");
      browser_default()(Array.isArray(links), "TypeError expected links to be an array");
      links.forEach((link) => {
        this.addSettingsLink(sectionId, link);
      });
    });
    __publicField(this, "bootstrapAdmin", () => StrapiApp_async(this, null, function* () {
      yield this.createCustomConfigurations();
      this.createHook(exposedHooks/* INJECT_COLUMN_IN_TABLE */.kT);
      this.createHook(exposedHooks/* MUTATE_COLLECTION_TYPES_LINKS */.OC);
      this.createHook(exposedHooks/* MUTATE_SINGLE_TYPES_LINKS */.Md);
      this.createHook(exposedHooks/* MUTATE_EDIT_VIEW_LAYOUT */.$4);
      return Promise.resolve();
    }));
    __publicField(this, "createCustomConfigurations", () => StrapiApp_async(this, null, function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      if ((_a = this.customConfigurations) == null ? void 0 : _a.locales) {
        this.configurations.locales = [
          "en",
          ...((_b = this.customConfigurations.locales) == null ? void 0 : _b.filter((loc) => loc !== "en")) || []
        ];
      }
      if ((_d = (_c = this.customConfigurations) == null ? void 0 : _c.auth) == null ? void 0 : _d.logo) {
        this.configurations.authLogo = this.customConfigurations.auth.logo;
      }
      if ((_f = (_e = this.customConfigurations) == null ? void 0 : _e.menu) == null ? void 0 : _f.logo) {
        this.configurations.menuLogo = this.customConfigurations.menu.logo;
      }
      if ((_h = (_g = this.customConfigurations) == null ? void 0 : _g.head) == null ? void 0 : _h.favicon) {
        this.configurations.head.favicon = this.customConfigurations.head.favicon;
      }
      if ((_i = this.customConfigurations) == null ? void 0 : _i.theme) {
        merge_default()(this.configurations.themes.light, this.customConfigurations.theme);
      }
      if (((_k = (_j = this.customConfigurations) == null ? void 0 : _j.notifications) == null ? void 0 : _k.releases) !== void 0) {
        this.configurations.notifications.releases = this.customConfigurations.notifications.releases;
      }
      if (((_l = this.customConfigurations) == null ? void 0 : _l.tutorials) !== void 0) {
        this.configurations.tutorials = this.customConfigurations.tutorials;
      }
    }));
    __publicField(this, "createHook", (name) => {
      this.hooksDict[name] = (0,utils/* createHook */.ab)();
    });
    __publicField(this, "createSettingSection", (section, links) => {
      var _a, _b;
      browser_default()(section.id, "section.id should be defined");
      browser_default()(
        ((_a = section.intlLabel) == null ? void 0 : _a.id) && ((_b = section.intlLabel) == null ? void 0 : _b.defaultMessage),
        "section.intlLabel should be defined"
      );
      browser_default()(Array.isArray(links), "TypeError expected links to be an array");
      browser_default()(this.settings[section.id] === void 0, "A similar section already exists");
      this.settings[section.id] = StrapiApp_spreadProps(StrapiApp_spreadValues({}, section), { links: [] });
      links.forEach((link) => {
        this.addSettingsLink(section.id, link);
      });
    });
    __publicField(this, "createStore", () => {
      const store = store_configureStore(this.middlewares.middlewares, this.reducers.reducers);
      return store;
    });
    __publicField(this, "getAdminInjectedComponents", (moduleName, containerName, blockName) => {
      try {
        return this.admin.injectionZones[moduleName][containerName][blockName] || [];
      } catch (err) {
        StrapiApp_console.error("Cannot get injected component", err);
        return err;
      }
    });
    __publicField(this, "getPlugin", (pluginId) => {
      return this.plugins[pluginId];
    });
    __publicField(this, "injectContentManagerComponent", (containerName, blockName, component) => {
      var _a;
      browser_default()(
        (_a = this.admin.injectionZones.contentManager[containerName]) == null ? void 0 : _a[blockName],
        `The ${containerName} ${blockName} zone is not defined in the content manager`
      );
      browser_default()(component, "A Component must be provided");
      this.admin.injectionZones.contentManager[containerName][blockName].push(component);
    });
    __publicField(this, "injectAdminComponent", (containerName, blockName, component) => {
      var _a;
      browser_default()(
        (_a = this.admin.injectionZones.admin[containerName]) == null ? void 0 : _a[blockName],
        `The ${containerName} ${blockName} zone is not defined in the admin`
      );
      browser_default()(component, "A Component must be provided");
      this.admin.injectionZones.admin[containerName][blockName].push(component);
    });
    __publicField(this, "registerHook", (name, fn) => {
      browser_default()(
        this.hooksDict[name],
        `The hook ${name} is not defined. You are trying to register a hook that does not exist in the application.`
      );
      this.hooksDict[name].register(fn);
    });
    __publicField(this, "registerPlugin", (pluginConf) => {
      const plugin = (0,apis/* Plugin */.k_)(pluginConf);
      this.plugins[plugin.pluginId] = plugin;
    });
    __publicField(this, "runHookSeries", (name, asynchronous = false) => asynchronous ? this.hooksDict[name].runSeriesAsync() : this.hooksDict[name].runSeries());
    __publicField(this, "runHookWaterfall", (name, initialValue, asynchronous = false, store) => {
      return asynchronous ? this.hooksDict[name].runWaterfallAsync(initialValue, store) : this.hooksDict[name].runWaterfall(initialValue, store);
    });
    __publicField(this, "runHookParallel", (name) => this.hooksDict[name].runParallel());
    this.customConfigurations = adminConfig.config;
    this.customBootstrapConfiguration = adminConfig.bootstrap;
    this.configurations = {
      authLogo: logo_strapi_auth_v4_namespaceObject,
      head: { favicon: favicon_namespaceObject },
      locales: ["en"],
      menuLogo: logo_strapi_menu_namespaceObject,
      notifications: { releases: true },
      themes: { light: themes.lightTheme, dark: themes.darkTheme },
      translations: {},
      tutorials: true
    };
    this.appPlugins = appPlugins || {};
    this.library = library;
    this.middlewares = middlewares;
    this.plugins = {};
    this.reducers = reducers;
    this.translations = {};
    this.hooksDict = {};
    this.admin = {
      injectionZones: src_injectionZones
    };
    this.customFields = apis/* customFields */.VB;
    this.menu = [];
    this.settings = {
      global: {
        id: "global",
        intlLabel: {
          id: "Settings.global",
          defaultMessage: "Global Settings"
        },
        links: []
      }
    };
  }
  bootstrap() {
    return StrapiApp_async(this, null, function* () {
      Object.keys(this.appPlugins).forEach((plugin) => {
        const bootstrap = this.appPlugins[plugin].bootstrap;
        if (bootstrap) {
          bootstrap({
            addSettingsLink: this.addSettingsLink,
            addSettingsLinks: this.addSettingsLinks,
            getPlugin: this.getPlugin,
            injectContentManagerComponent: this.injectContentManagerComponent,
            injectAdminComponent: this.injectAdminComponent,
            registerHook: this.registerHook
          });
        }
      });
      if (isFunction_default()(this.customBootstrapConfiguration)) {
        this.customBootstrapConfiguration({
          addComponents: this.addComponents,
          addFields: this.addFields,
          addMenuLink: this.addMenuLink,
          addReducers: this.addReducers,
          addSettingsLink: this.addSettingsLink,
          addSettingsLinks: this.addSettingsLinks,
          getPlugin: this.getPlugin,
          injectContentManagerComponent: this.injectContentManagerComponent,
          injectAdminComponent: this.injectAdminComponent,
          registerHook: this.registerHook
        });
      }
    });
  }
  initialize() {
    return StrapiApp_async(this, null, function* () {
      Object.keys(this.appPlugins).forEach((plugin) => {
        this.appPlugins[plugin].register(this);
      });
    });
  }
  /**
   * Load the admin translations
   * @returns {Object} The imported admin translations
   */
  loadAdminTrads() {
    return StrapiApp_async(this, null, function* () {
      const arrayOfPromises = this.configurations.locales.map((locale) => {
        return __webpack_require__(44081)(`./${locale}.json`).then(({ default: data }) => {
          return { data, locale };
        }).catch(() => {
          return { data: null, locale };
        });
      });
      const adminLocales = yield Promise.all(arrayOfPromises);
      const translations = adminLocales.reduce((acc, current) => {
        if (current.data) {
          acc[current.locale] = current.data;
        }
        return acc;
      }, {});
      return translations;
    });
  }
  /**
   * Load the application's translations and merged the custom translations
   * with the default ones.
   *
   */
  loadTrads() {
    return StrapiApp_async(this, null, function* () {
      const adminTranslations = yield this.loadAdminTrads();
      const arrayOfPromises = Object.keys(this.appPlugins).map((plugin) => {
        const registerTrads = this.appPlugins[plugin].registerTrads;
        if (registerTrads) {
          return registerTrads({ locales: this.configurations.locales });
        }
        return null;
      }).filter((a) => a);
      const pluginsTrads = yield Promise.all(arrayOfPromises);
      const mergedTrads = pluginsTrads.reduce((acc, currentPluginTrads) => {
        const pluginTrads = currentPluginTrads.reduce((acc1, current) => {
          acc1[current.locale] = current.data;
          return acc1;
        }, {});
        Object.keys(pluginTrads).forEach((locale) => {
          acc[locale] = StrapiApp_spreadValues(StrapiApp_spreadValues({}, acc[locale]), pluginTrads[locale]);
        });
        return acc;
      }, {});
      const translations = this.configurations.locales.reduce((acc, current) => {
        var _a, _b;
        acc[current] = StrapiApp_spreadValues(StrapiApp_spreadValues(StrapiApp_spreadValues({}, adminTranslations[current]), mergedTrads[current] || {}), (_b = (_a = this.customConfigurations) == null ? void 0 : _a.translations) == null ? void 0 : _b[current]);
        return acc;
      }, {});
      this.configurations.translations = translations;
      return Promise.resolve();
    });
  }
  render() {
    const store = this.createStore();
    const localeNames = pick_default()(translations_languageNativeNames, this.configurations.locales || []);
    const {
      components: { components },
      fields: { fields }
    } = this.library;
    return /* @__PURE__ */ react.createElement(
      components_Providers,
      {
        authLogo: this.configurations.authLogo,
        components,
        fields,
        customFields: this.customFields,
        localeNames,
        getAdminInjectedComponents: this.getAdminInjectedComponents,
        getPlugin: this.getPlugin,
        messages: this.configurations.translations,
        menu: this.menu,
        menuLogo: this.configurations.menuLogo,
        plugins: this.plugins,
        runHookParallel: this.runHookParallel,
        runHookWaterfall: (name, initialValue, async = false) => {
          return this.runHookWaterfall(name, initialValue, async, store);
        },
        runHookSeries: this.runHookSeries,
        themes: this.configurations.themes,
        settings: this.settings,
        showTutorials: this.configurations.tutorials,
        showReleaseNotification: this.configurations.notifications.releases,
        store
      },
      /* @__PURE__ */ react.createElement(react.Fragment, null, /* @__PURE__ */ react.createElement(
        Helmet.Helmet,
        {
          link: [
            {
              rel: "icon",
              type: "image/png",
              href: this.configurations.head.favicon
            }
          ],
          htmlAttributes: { lang: localStorage.getItem(utils_localStorageKey) || "en" }
        }
      ), /* @__PURE__ */ react.createElement(react_router_dom_min.BrowserRouter, { basename: utils/* basename */.P8 }, /* @__PURE__ */ react.createElement(pages_App, { store })))
    );
  }
}
/* harmony default export */ const src_StrapiApp = (({ adminConfig = {}, appPlugins, library, middlewares, reducers }) => new StrapiApp({ adminConfig, appPlugins, library, middlewares, reducers }));


/***/ }),

/***/ 41282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);

const LocalesProviderContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocalesProviderContext);


/***/ }),

/***/ 67366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41282);


const useLocalesProvider = () => {
  const { changeLocale, localeNames, messages } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
  return { changeLocale, localeNames, messages };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalesProvider);


/***/ }),

/***/ 94550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8162);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70436);



const Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img`
  height: ${72 / 16}rem;
`;
const Logo = () => {
  const {
    logos: { auth }
  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useConfigurations */ .Bp)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Img, { src: auth.default, "aria-hidden": true, alt: "" });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 19781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  tl: () => (/* reexport */ Admin),
  tm: () => (/* reexport */ Configurations),
  he: () => (/* reexport */ PermisssionsDataManagerContext),
  ZY: () => (/* reexport */ ThemeToggle)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// CONCATENATED MODULE: ./.cache/admin/src/contexts/Admin/index.js

const AdminContext = (0,react.createContext)({});
/* harmony default export */ const Admin = (AdminContext);

;// CONCATENATED MODULE: ./.cache/admin/src/contexts/Configurations/index.js

const ConfigurationsContext = (0,react.createContext)({});
/* harmony default export */ const Configurations = (ConfigurationsContext);

;// CONCATENATED MODULE: ./.cache/admin/src/contexts/PermisssionsDataManagerContext/index.js

const PermissionsDataManagerContext = (0,react.createContext)({});
/* harmony default export */ const PermisssionsDataManagerContext = (PermissionsDataManagerContext);

;// CONCATENATED MODULE: ./.cache/admin/src/contexts/ThemeToggle/index.js

const ThemeToggleContext = (0,react.createContext)({});
/* harmony default export */ const ThemeToggle = (ThemeToggleContext);

;// CONCATENATED MODULE: ./.cache/admin/src/contexts/index.js






/***/ }),

/***/ 39683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $4: () => (/* binding */ MUTATE_EDIT_VIEW_LAYOUT),
/* harmony export */   Md: () => (/* binding */ MUTATE_SINGLE_TYPES_LINKS),
/* harmony export */   OC: () => (/* binding */ MUTATE_COLLECTION_TYPES_LINKS),
/* harmony export */   kT: () => (/* binding */ INJECT_COLUMN_IN_TABLE)
/* harmony export */ });
const INJECT_COLUMN_IN_TABLE = "Admin/CM/pages/ListView/inject-column-in-table";
const MUTATE_COLLECTION_TYPES_LINKS = "Admin/CM/pages/App/mutate-collection-types-links";
const MUTATE_EDIT_VIEW_LAYOUT = "Admin/CM/pages/EditView/mutate-edit-view-layout";
const MUTATE_SINGLE_TYPES_LINKS = "Admin/CM/pages/App/mutate-single-types-links";


/***/ }),

/***/ 70436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Bp: () => (/* reexport */ useConfigurations/* default */.A),
  Sr: () => (/* reexport */ hooks_useFetchPermissionsLayout),
  Gs: () => (/* reexport */ hooks_useFetchRole),
  b: () => (/* reexport */ hooks_useMenu),
  GB: () => (/* reexport */ hooks_useModels),
  pn: () => (/* reexport */ hooks_usePermissionsDataManager),
  g4: () => (/* reexport */ hooks_useRegenerate),
  xo: () => (/* reexport */ hooks_useRolesList),
  T6: () => (/* reexport */ hooks_useSettingsForm),
  ki: () => (/* reexport */ hooks_useSettingsMenu),
  fD: () => (/* reexport */ hooks_useThemeToggle)
});

// UNUSED EXPORTS: useReleaseNotification

// EXTERNAL MODULE: ./.cache/admin/src/hooks/useConfigurations/index.js
var useConfigurations = __webpack_require__(31055);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(29434);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.cjs.production.min.js
var immer_cjs_production_min = __webpack_require__(56477);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useModels/reducer.js

const initialState = {
  collectionTypes: [],
  components: [],
  isLoading: true,
  singleTypes: []
};
const reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_MODELS": {
      draftState.collectionTypes = initialState.collectionTypes;
      draftState.singleTypes = initialState.singleTypes;
      draftState.components = initialState.components;
      draftState.isLoading = true;
      break;
    }
    case "GET_MODELS_ERROR": {
      draftState.collectionTypes = initialState.collectionTypes;
      draftState.singleTypes = initialState.singleTypes;
      draftState.components = initialState.components;
      draftState.isLoading = false;
      break;
    }
    case "GET_MODELS_SUCCEDED": {
      const getContentTypeByKind = (kind) => action.contentTypes.filter(
        (contentType) => contentType.isDisplayed && contentType.kind === kind
      );
      draftState.isLoading = false;
      draftState.collectionTypes = getContentTypeByKind("collectionType");
      draftState.singleTypes = getContentTypeByKind("singleType");
      draftState.components = action.components;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useModels_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useModels/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



const useModels = () => {
  const toggleNotification = (0,build.useNotification)();
  const [state, dispatch] = (0,react.useReducer)(useModels_reducer, initialState);
  (0,react.useEffect)(() => {
    fetchModels();
  }, []);
  const fetchModels = () => __async(void 0, null, function* () {
    dispatch({
      type: "GET_MODELS"
    });
    try {
      const [{ data: components }, { data: contentTypes }] = yield Promise.all(
        ["components", "content-types"].map(
          (endPoint) => (0,build.request)(`/content-manager/${endPoint}`, { method: "GET" })
        )
      );
      dispatch({
        type: "GET_MODELS_SUCCEDED",
        contentTypes,
        components
      });
    } catch (err) {
      dispatch({
        type: "GET_MODELS_ERROR"
      });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  return __spreadProps(__spreadValues({}, state), {
    getData: fetchModels
  });
};
/* harmony default export */ const hooks_useModels = (useModels);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchPermissionsLayout/reducer.js

const reducer_initialState = {
  data: {},
  error: null,
  isLoading: true
};
const reducer_reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA": {
      draftState.isLoading = true;
      draftState.data = {};
      draftState.error = null;
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      draftState.data = action.data;
      draftState.isLoading = false;
      draftState.error = null;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      draftState.error = action.error;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useFetchPermissionsLayout_reducer = (reducer_reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchPermissionsLayout/index.js
var useFetchPermissionsLayout_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



const useFetchPermissionsLayout = (id) => {
  const [{ data, error, isLoading }, dispatch] = (0,react.useReducer)(useFetchPermissionsLayout_reducer, reducer_initialState);
  (0,react.useEffect)(() => {
    const getData = () => useFetchPermissionsLayout_async(void 0, null, function* () {
      dispatch({
        type: "GET_DATA"
      });
      const { data: data2 } = yield (0,build.request)("/admin/permissions", {
        method: "GET",
        params: { role: id }
      });
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        data: data2
      });
    });
    getData();
  }, [id]);
  return { data, error, isLoading };
};
/* harmony default export */ const hooks_useFetchPermissionsLayout = (useFetchPermissionsLayout);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchRole/reducer.js

const useFetchRole_reducer_initialState = {
  role: {},
  permissions: {},
  isLoading: true
};
const useFetchRole_reducer_reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.role = action.role;
      draftState.permissions = action.permissions;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.role.name = action.name;
      draftState.role.description = action.description;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useFetchRole_reducer = (useFetchRole_reducer_reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useFetchRole/index.js
/* provided dependency */ var console = __webpack_require__(96763);
var useFetchRole_defProp = Object.defineProperty;
var useFetchRole_defProps = Object.defineProperties;
var useFetchRole_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var useFetchRole_getOwnPropSymbols = Object.getOwnPropertySymbols;
var useFetchRole_hasOwnProp = Object.prototype.hasOwnProperty;
var useFetchRole_propIsEnum = Object.prototype.propertyIsEnumerable;
var useFetchRole_defNormalProp = (obj, key, value) => key in obj ? useFetchRole_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var useFetchRole_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (useFetchRole_hasOwnProp.call(b, prop))
      useFetchRole_defNormalProp(a, prop, b[prop]);
  if (useFetchRole_getOwnPropSymbols)
    for (var prop of useFetchRole_getOwnPropSymbols(b)) {
      if (useFetchRole_propIsEnum.call(b, prop))
        useFetchRole_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var useFetchRole_spreadProps = (a, b) => useFetchRole_defProps(a, useFetchRole_getOwnPropDescs(b));
var useFetchRole_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};



const useFetchRole = (id) => {
  const toggleNotification = (0,build.useNotification)();
  const [state, dispatch] = (0,react.useReducer)(useFetchRole_reducer, useFetchRole_reducer_initialState);
  (0,react.useEffect)(() => {
    if (id) {
      fetchRole(id);
    } else {
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        role: {},
        permissions: []
      });
    }
  }, [id]);
  const fetchRole = (roleId) => useFetchRole_async(void 0, null, function* () {
    try {
      const [{ data: role }, { data: permissions }] = yield Promise.all(
        [`roles/${roleId}`, `roles/${roleId}/permissions`].map(
          (endPoint) => (0,build.request)(`/admin/${endPoint}`, { method: "GET" })
        )
      );
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        role,
        permissions
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: "GET_DATA_ERROR"
      });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  const handleSubmitSucceeded = (0,react.useCallback)((data) => {
    dispatch(useFetchRole_spreadValues({
      type: "ON_SUBMIT_SUCCEEDED"
    }, data));
  }, []);
  return useFetchRole_spreadProps(useFetchRole_spreadValues({}, state), { onSubmitSucceeded: handleSubmitSucceeded });
};
/* harmony default export */ const hooks_useFetchRole = (useFetchRole);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu/utils/checkPermissions.js

const checkPermissions = (userPermissions, permissionsToCheck) => permissionsToCheck.map(({ permissions }) => (0,build.hasPermissions)(userPermissions, permissions));
/* harmony default export */ const utils_checkPermissions = (checkPermissions);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu/utils/getPluginSectionLinks.js
var getPluginSectionLinks_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const getPluginSectionLinks = (userPermissions, pluginsSectionRawLinks) => getPluginSectionLinks_async(void 0, null, function* () {
  const pluginSectionPermissionsPromises = utils_checkPermissions(
    userPermissions,
    pluginsSectionRawLinks
  );
  const pluginSectionLinksPermissions = yield Promise.all(pluginSectionPermissionsPromises);
  const authorizedPluginSectionLinks = pluginsSectionRawLinks.filter(
    (_, index) => pluginSectionLinksPermissions[index]
  );
  return authorizedPluginSectionLinks;
});
/* harmony default export */ const utils_getPluginSectionLinks = (getPluginSectionLinks);

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__(88055);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu/utils/getGeneralLinks.js
var getGeneralLinks_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};


const getGeneralLinks = (permissions, generalSectionRawLinks, shouldUpdateStrapi) => getGeneralLinks_async(void 0, null, function* () {
  const generalSectionPermissionsPromises = utils_checkPermissions(permissions, generalSectionRawLinks);
  const generalSectionLinksPermissions = yield Promise.all(generalSectionPermissionsPromises);
  const authorizedGeneralSectionLinks = generalSectionRawLinks.filter(
    (_, index) => generalSectionLinksPermissions[index]
  );
  const settingsLinkIndex = authorizedGeneralSectionLinks.findIndex(
    (obj) => obj.to === "/settings"
  );
  if (settingsLinkIndex === -1) {
    return [];
  }
  const authorizedGeneralLinksClone = cloneDeep_default()(authorizedGeneralSectionLinks);
  authorizedGeneralLinksClone[settingsLinkIndex].notificationsCount = shouldUpdateStrapi ? 1 : 0;
  return authorizedGeneralLinksClone;
});
/* harmony default export */ const utils_getGeneralLinks = (getGeneralLinks);

// EXTERNAL MODULE: ./node_modules/@strapi/icons/Cog.js
var Cog = __webpack_require__(26868);
var Cog_default = /*#__PURE__*/__webpack_require__.n(Cog);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/Puzzle.js
var Puzzle = __webpack_require__(36243);
var Puzzle_default = /*#__PURE__*/__webpack_require__.n(Puzzle);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/ShoppingCart.js
var ShoppingCart = __webpack_require__(99629);
var ShoppingCart_default = /*#__PURE__*/__webpack_require__.n(ShoppingCart);
// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(84060);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu/reducer.js





const useMenu_reducer_initialState = {
  generalSectionLinks: [
    {
      icon: (Puzzle_default()),
      intlLabel: {
        id: "global.plugins",
        defaultMessage: "Plugins"
      },
      to: "/list-plugins",
      permissions: permissions/* default */.A.marketplace.main
    },
    {
      icon: (ShoppingCart_default()),
      intlLabel: {
        id: "global.marketplace",
        defaultMessage: "Marketplace"
      },
      to: "/marketplace",
      permissions: permissions/* default */.A.marketplace.main
    },
    {
      icon: (Cog_default()),
      intlLabel: {
        id: "global.settings",
        defaultMessage: "Settings"
      },
      to: "/settings",
      // Permissions of this link are retrieved in the init phase
      // using the settings menu
      permissions: [],
      notificationsCount: 0
    }
  ],
  pluginsSectionLinks: [],
  isLoading: true
};
const useMenu_reducer_reducer = (state = useMenu_reducer_initialState, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "SET_SECTION_LINKS": {
      const { authorizedGeneralSectionLinks, authorizedPluginSectionLinks } = action.data;
      draftState.generalSectionLinks = authorizedGeneralSectionLinks;
      draftState.pluginsSectionLinks = authorizedPluginSectionLinks;
      break;
    }
    case "UNSET_IS_LOADING": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useMenu_reducer = (useMenu_reducer_reducer);


;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useMenu/index.js
var useMenu_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};





const useMenu = () => {
  const [state, dispatch] = (0,react.useReducer)(useMenu_reducer, useMenu_reducer_initialState);
  const { allPermissions } = (0,build.useRBACProvider)();
  const { shouldUpdateStrapi } = (0,build.useAppInfos)();
  const { menu } = (0,build.useStrapiApp)();
  const generalSectionLinksRef = (0,react.useRef)(state.generalSectionLinks);
  const shouldUpdateStrapiRef = (0,react.useRef)(shouldUpdateStrapi);
  const resolvePermissions = (..._0) => useMenu_async(void 0, [..._0], function* (permissions = allPermissions) {
    const pluginsSectionLinks = menu;
    const authorizedPluginSectionLinks = yield utils_getPluginSectionLinks(
      permissions,
      pluginsSectionLinks
    );
    const authorizedGeneralSectionLinks = yield utils_getGeneralLinks(
      permissions,
      generalSectionLinksRef.current,
      shouldUpdateStrapiRef.current
    );
    dispatch({
      type: "SET_SECTION_LINKS",
      data: {
        authorizedGeneralSectionLinks,
        authorizedPluginSectionLinks
      }
    });
    dispatch({ type: "UNSET_IS_LOADING" });
  });
  const resolvePermissionsRef = (0,react.useRef)(resolvePermissions);
  (0,react.useEffect)(() => {
    resolvePermissionsRef.current(allPermissions);
  }, [allPermissions, dispatch]);
  return state;
};
/* harmony default export */ const hooks_useMenu = (useMenu);

// EXTERNAL MODULE: ./node_modules/lodash/get.js
var get = __webpack_require__(58156);
var get_default = /*#__PURE__*/__webpack_require__.n(get);
// EXTERNAL MODULE: ./.cache/admin/src/core/utils/index.js + 2 modules
var utils = __webpack_require__(30158);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useRolesList/init.js
var init_defProp = Object.defineProperty;
var init_defProps = Object.defineProperties;
var init_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var init_getOwnPropSymbols = Object.getOwnPropertySymbols;
var init_hasOwnProp = Object.prototype.hasOwnProperty;
var init_propIsEnum = Object.prototype.propertyIsEnumerable;
var init_defNormalProp = (obj, key, value) => key in obj ? init_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var init_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (init_hasOwnProp.call(b, prop))
      init_defNormalProp(a, prop, b[prop]);
  if (init_getOwnPropSymbols)
    for (var prop of init_getOwnPropSymbols(b)) {
      if (init_propIsEnum.call(b, prop))
        init_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var init_spreadProps = (a, b) => init_defProps(a, init_getOwnPropDescs(b));
const init = (initialState, shouldFetchData) => {
  return init_spreadProps(init_spreadValues({}, initialState), { isLoading: shouldFetchData });
};
/* harmony default export */ const useRolesList_init = (init);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useRolesList/reducer.js

const useRolesList_reducer_initialState = {
  roles: [],
  isLoading: true
};
const useRolesList_reducer_reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA": {
      draftState.isLoading = true;
      draftState.roles = [];
      break;
    }
    case "GET_DATA_SUCCEEDED": {
      draftState.roles = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useRolesList_reducer = (useRolesList_reducer_reducer);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useRolesList/index.js
var useRolesList_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






const useRolesList = (shouldFetchData = true) => {
  const toggleNotification = (0,build.useNotification)();
  const [{ roles, isLoading }, dispatch] = (0,react.useReducer)(
    useRolesList_reducer,
    useRolesList_reducer_initialState,
    () => useRolesList_init(useRolesList_reducer_initialState, shouldFetchData)
  );
  (0,react.useEffect)(() => {
    if (shouldFetchData) {
      fetchRolesList();
    }
  }, [shouldFetchData]);
  const fetchRolesList = (0,react.useCallback)(() => useRolesList_async(void 0, null, function* () {
    try {
      dispatch({
        type: "GET_DATA"
      });
      const {
        data: { data }
      } = yield utils/* axiosInstance */.SP.get("/admin/roles");
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        data
      });
    } catch (err) {
      const message = get_default()(err, ["response", "payload", "message"], "An error occured");
      dispatch({
        type: "GET_DATA_ERROR"
      });
      if (message !== "Forbidden") {
        toggleNotification({
          type: "warning",
          message
        });
      }
    }
  }), [toggleNotification]);
  return { roles, isLoading, getData: fetchRolesList };
};
/* harmony default export */ const hooks_useRolesList = (useRolesList);

// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/reducer.js


const useSettingsMenu_reducer_initialState = {
  menu: [],
  isLoading: true
};
const useSettingsMenu_reducer_reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_cjs_production_min["default"])(state, (draftState) => {
    switch (action.type) {
      case "CHECK_PERMISSIONS_SUCCEEDED": {
        action.data.forEach((checkedPermissions) => {
          if (checkedPermissions.hasPermission) {
            (0,lodash.set)(
              draftState,
              ["menu", ...checkedPermissions.path.split("."), "isDisplayed"],
              checkedPermissions.hasPermission
            );
          }
        });
        draftState.menu.forEach((section, sectionIndex) => {
          draftState.menu[sectionIndex].links = section.links.filter(
            (link) => link.isDisplayed === true
          );
        });
        draftState.isLoading = false;
        break;
      }
      default:
        return draftState;
    }
  })
);
/* harmony default export */ const useSettingsMenu_reducer = (useSettingsMenu_reducer_reducer);


// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(90179);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(33031);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/utils/sortLinks.js

const sortLinks = (links) => sortBy_default()(links, (link) => link.id);
/* harmony default export */ const utils_sortLinks = (sortLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/utils/formatLinks.js
var formatLinks_defProp = Object.defineProperty;
var formatLinks_defProps = Object.defineProperties;
var formatLinks_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var formatLinks_getOwnPropSymbols = Object.getOwnPropertySymbols;
var formatLinks_hasOwnProp = Object.prototype.hasOwnProperty;
var formatLinks_propIsEnum = Object.prototype.propertyIsEnumerable;
var formatLinks_defNormalProp = (obj, key, value) => key in obj ? formatLinks_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var formatLinks_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (formatLinks_hasOwnProp.call(b, prop))
      formatLinks_defNormalProp(a, prop, b[prop]);
  if (formatLinks_getOwnPropSymbols)
    for (var prop of formatLinks_getOwnPropSymbols(b)) {
      if (formatLinks_propIsEnum.call(b, prop))
        formatLinks_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var formatLinks_spreadProps = (a, b) => formatLinks_defProps(a, formatLinks_getOwnPropDescs(b));
const formatLinks = (menu) => {
  return menu.map((menuSection) => {
    const formattedLinks = menuSection.links.map((link) => formatLinks_spreadProps(formatLinks_spreadValues({}, link), {
      isDisplayed: false
    }));
    return formatLinks_spreadProps(formatLinks_spreadValues({}, menuSection), { links: formattedLinks });
  });
};
/* harmony default export */ const utils_formatLinks = (formatLinks);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(45458);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/utils/defaultGlobalLinks.js

const defaultGlobalLinks = [
  {
    intlLabel: { id: "Settings.application.title", defaultMessage: "Overview" },
    to: "/settings/application-infos",
    id: "000-application-infos",
    isDisplayed: false,
    permissions: []
  },
  {
    intlLabel: { id: "Settings.webhooks.title", defaultMessage: "Webhooks" },
    to: "/settings/webhooks",
    id: "webhooks",
    isDisplayed: false,
    permissions: permissions/* default */.A.settings.webhooks.main
  },
  {
    intlLabel: { id: "Settings.apiTokens.title", defaultMessage: "API Tokens" },
    to: "/settings/api-tokens?sort=name:ASC",
    id: "api-tokens",
    isDisplayed: false,
    permissions: permissions/* default */.A.settings["api-tokens"].main
  }
];
/* harmony default export */ const utils_defaultGlobalLinks = (defaultGlobalLinks);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/utils/globalLinks.js
var customGlobalLinks=function(){if(window&&window.strapi&&window.strapi.isEE){return (__webpack_require__(75299)/* ["default"] */ .A);}return (__webpack_require__(22693)/* ["default"] */ .A);}();/* harmony default export */ const globalLinks = ([].concat((0,toConsumableArray/* default */.A)(utils_defaultGlobalLinks),(0,toConsumableArray/* default */.A)(customGlobalLinks)));
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/init.js
var useSettingsMenu_init_defProp = Object.defineProperty;
var useSettingsMenu_init_defProps = Object.defineProperties;
var useSettingsMenu_init_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var useSettingsMenu_init_getOwnPropSymbols = Object.getOwnPropertySymbols;
var useSettingsMenu_init_hasOwnProp = Object.prototype.hasOwnProperty;
var useSettingsMenu_init_propIsEnum = Object.prototype.propertyIsEnumerable;
var useSettingsMenu_init_defNormalProp = (obj, key, value) => key in obj ? useSettingsMenu_init_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var useSettingsMenu_init_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (useSettingsMenu_init_hasOwnProp.call(b, prop))
      useSettingsMenu_init_defNormalProp(a, prop, b[prop]);
  if (useSettingsMenu_init_getOwnPropSymbols)
    for (var prop of useSettingsMenu_init_getOwnPropSymbols(b)) {
      if (useSettingsMenu_init_propIsEnum.call(b, prop))
        useSettingsMenu_init_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var useSettingsMenu_init_spreadProps = (a, b) => useSettingsMenu_init_defProps(a, useSettingsMenu_init_getOwnPropDescs(b));





const init_init = (initialState, { settings, shouldUpdateStrapi }) => {
  const pluginsGlobalLinks = settings.global.links;
  const sortedGlobalLinks = utils_sortLinks([...pluginsGlobalLinks, ...globalLinks]).map((link) => useSettingsMenu_init_spreadProps(useSettingsMenu_init_spreadValues({}, link), {
    hasNotification: link.id === "000-application-infos" && shouldUpdateStrapi
  }));
  const otherSections = Object.values(omit_default()(settings, "global"));
  const menu = [
    useSettingsMenu_init_spreadProps(useSettingsMenu_init_spreadValues({}, settings.global), {
      links: sortedGlobalLinks
    }),
    {
      id: "permissions",
      intlLabel: { id: "Settings.permissions", defaultMessage: "Administration Panel" },
      links: [
        {
          intlLabel: { id: "global.roles", defaultMessage: "Roles" },
          to: "/settings/roles",
          id: "roles",
          isDisplayed: false,
          permissions: permissions/* default */.A.settings.roles.main
        },
        {
          intlLabel: { id: "global.users" },
          // Init the search params directly
          to: "/settings/users?pageSize=10&page=1&sort=firstname",
          id: "users",
          isDisplayed: false,
          permissions: permissions/* default */.A.settings.users.main
        }
      ]
    },
    ...otherSections
  ];
  return useSettingsMenu_init_spreadProps(useSettingsMenu_init_spreadValues({}, initialState), { menu: utils_formatLinks(menu) });
};
/* harmony default export */ const useSettingsMenu_init = (init_init);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsMenu/index.js
var useSettingsMenu_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




const useSettingsMenu = (noCheck = false) => {
  const { allPermissions: permissions } = (0,build.useRBACProvider)();
  const { shouldUpdateStrapi } = (0,build.useAppInfos)();
  const { settings } = (0,build.useStrapiApp)();
  const [{ isLoading, menu }, dispatch] = (0,react.useReducer)(
    useSettingsMenu_reducer,
    useSettingsMenu_reducer_initialState,
    () => useSettingsMenu_init(useSettingsMenu_reducer_initialState, { settings, shouldUpdateStrapi })
  );
  (0,react.useEffect)(() => {
    const getData = () => useSettingsMenu_async(void 0, null, function* () {
      const checkPermissions = (permissionsToCheck, path) => useSettingsMenu_async(void 0, null, function* () {
        const hasPermission = yield (0,build.hasPermissions)(permissions, permissionsToCheck);
        return { hasPermission, path };
      });
      const generateArrayOfPromises = (array) => {
        return array.reduce((acc, current, sectionIndex) => {
          const generateArrayOfPromises2 = (array2) => array2.map(
            (link, index) => checkPermissions(array2[index].permissions, `${sectionIndex}.links.${index}`)
          );
          return [...acc, ...generateArrayOfPromises2(current.links)];
        }, []);
      };
      const generalSectionLinksArrayOfPromises = generateArrayOfPromises(menu);
      const data = yield Promise.all(generalSectionLinksArrayOfPromises);
      dispatch({
        type: "CHECK_PERMISSIONS_SUCCEEDED",
        data
      });
    });
    if (!noCheck) {
      getData();
    }
  }, [permissions, noCheck]);
  return { isLoading, menu };
};
/* harmony default export */ const hooks_useSettingsMenu = (useSettingsMenu);

// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 8 modules
var src_utils = __webpack_require__(6576);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsForm/reducer.js


const useSettingsForm_reducer_initialState = {
  fieldsToPick: [],
  formErrors: {},
  initialData: {},
  isLoading: true,
  modifiedData: {},
  showHeaderButtonLoader: false,
  showHeaderLoader: true
};
const useSettingsForm_reducer_reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.isLoading = false;
      draftState.showHeaderLoader = false;
      draftState.initialData = (0,lodash.pick)(action.data, state.fieldsToPick);
      draftState.modifiedData = (0,lodash.pick)(action.data, state.fieldsToPick);
      break;
    }
    case "ON_CANCEL": {
      draftState.modifiedData = state.initialData;
      draftState.formErrors = {};
      break;
    }
    case "ON_CHANGE": {
      if (action.inputType === "password" && !action.value) {
        (0,lodash.unset)(draftState.modifiedData, action.keys.split("."));
      } else if (action.keys.includes("username") && !action.value) {
        (0,lodash.set)(draftState.modifiedData, action.keys.split("."), null);
      } else {
        (0,lodash.set)(draftState.modifiedData, action.keys.split("."), action.value);
      }
      break;
    }
    case "ON_SUBMIT": {
      draftState.showHeaderButtonLoader = true;
      break;
    }
    case "ON_SUBMIT_SUCCEEDED": {
      draftState.initialData = (0,lodash.pick)(action.data, state.fieldsToPick);
      draftState.modifiedData = (0,lodash.pick)(action.data, state.fieldsToPick);
      draftState.showHeaderButtonLoader = false;
      break;
    }
    case "SET_ERRORS": {
      draftState.formErrors = action.errors;
      draftState.showHeaderButtonLoader = false;
      break;
    }
    default:
      return draftState;
  }
});


;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsForm/init.js
var useSettingsForm_init_defProp = Object.defineProperty;
var useSettingsForm_init_defProps = Object.defineProperties;
var useSettingsForm_init_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var useSettingsForm_init_getOwnPropSymbols = Object.getOwnPropertySymbols;
var useSettingsForm_init_hasOwnProp = Object.prototype.hasOwnProperty;
var useSettingsForm_init_propIsEnum = Object.prototype.propertyIsEnumerable;
var useSettingsForm_init_defNormalProp = (obj, key, value) => key in obj ? useSettingsForm_init_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var useSettingsForm_init_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (useSettingsForm_init_hasOwnProp.call(b, prop))
      useSettingsForm_init_defNormalProp(a, prop, b[prop]);
  if (useSettingsForm_init_getOwnPropSymbols)
    for (var prop of useSettingsForm_init_getOwnPropSymbols(b)) {
      if (useSettingsForm_init_propIsEnum.call(b, prop))
        useSettingsForm_init_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var useSettingsForm_init_spreadProps = (a, b) => useSettingsForm_init_defProps(a, useSettingsForm_init_getOwnPropDescs(b));
const useSettingsForm_init_init = (initialState, fieldsToPick) => {
  return useSettingsForm_init_spreadProps(useSettingsForm_init_spreadValues({}, initialState), { fieldsToPick });
};
/* harmony default export */ const useSettingsForm_init = (useSettingsForm_init_init);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useSettingsForm/index.js
/* provided dependency */ var useSettingsForm_console = __webpack_require__(96763);
var useSettingsForm_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






const useSettingsForm = (endPoint, schema, cbSuccess, fieldsToPick) => {
  const [
    { formErrors, initialData, isLoading, modifiedData, showHeaderButtonLoader, showHeaderLoader },
    dispatch
  ] = (0,react.useReducer)(useSettingsForm_reducer_reducer, useSettingsForm_reducer_initialState, () => useSettingsForm_init(useSettingsForm_reducer_initialState, fieldsToPick));
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  (0,react.useEffect)(() => {
    const getData = () => useSettingsForm_async(void 0, null, function* () {
      try {
        const { data } = yield (0,build.request)(endPoint, { method: "GET" });
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data,
          fieldsToPick
        });
      } catch (err) {
        useSettingsForm_console.error(err.response);
        toggleNotification({
          type: "warning",
          message: { id: "notification.error" }
        });
      }
    });
    if (endPoint) {
      getData();
    }
  }, [endPoint]);
  const handleCancel = () => {
    dispatch({
      type: "ON_CANCEL"
    });
  };
  const handleChange = ({ target: { name, value, type: inputType } }) => {
    dispatch({
      type: "ON_CHANGE",
      inputType,
      keys: name,
      value
    });
  };
  const setField = (fieldName, value) => {
    dispatch({
      type: "ON_CHANGE",
      keys: fieldName,
      value
    });
  };
  const handleSubmit = (e) => useSettingsForm_async(void 0, null, function* () {
    e.preventDefault();
    const errors = yield (0,src_utils/* checkFormValidity */.RB)(modifiedData, schema);
    dispatch({
      type: "SET_ERRORS",
      errors: errors || {}
    });
    if (!errors) {
      try {
        lockApp();
        dispatch({
          type: "ON_SUBMIT"
        });
        const cleanedData = (0,lodash.omit)(modifiedData, ["confirmPassword", "registrationToken"]);
        if (cleanedData.roles) {
          cleanedData.roles = cleanedData.roles.map((role) => role.id);
        }
        const { data } = yield (0,build.request)(endPoint, {
          method: "PUT",
          body: cleanedData
        });
        cbSuccess(data);
        dispatch({
          type: "ON_SUBMIT_SUCCEEDED",
          data
        });
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved" }
        });
      } catch (err) {
        const data = (0,lodash.get)(err, "response.payload", { data: {} });
        if ((0,lodash.has)(data, "data") && typeof data.data === "string") {
          toggleNotification({
            type: "warning",
            message: data.data
          });
        } else {
          toggleNotification({
            type: "warning",
            message: data.message
          });
        }
        const apiErrors = (0,src_utils/* formatAPIErrors */.N_)(data);
        dispatch({
          type: "SET_ERRORS",
          errors: apiErrors
        });
      } finally {
        unlockApp();
      }
    }
  });
  return [
    { formErrors, initialData, isLoading, modifiedData, showHeaderButtonLoader, showHeaderLoader },
    dispatch,
    { handleCancel, handleChange, handleSubmit, setField }
  ];
};
/* harmony default export */ const hooks_useSettingsForm = (useSettingsForm);

// EXTERNAL MODULE: ./.cache/admin/src/contexts/index.js + 4 modules
var contexts = __webpack_require__(19781);
;// CONCATENATED MODULE: ./.cache/admin/src/hooks/usePermissionsDataManager/index.js


const usePermissionsDataManager = () => (0,react.useContext)(contexts/* PermissionsDataManagerContext */.he);
/* harmony default export */ const hooks_usePermissionsDataManager = (usePermissionsDataManager);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useReleaseNotification/index.js


const showUpdateNotif = !JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF"));
const useReleaseNotification = () => {
  const { latestStrapiReleaseTag, shouldUpdateStrapi } = useAppInfos();
  const toggleNotification = useNotification();
  useEffect(() => {
    if (shouldUpdateStrapi && showUpdateNotif) {
      toggleNotification({
        type: "info",
        message: { id: "notification.version.update.message" },
        link: {
          url: `https://github.com/strapi/strapi/releases/tag/${latestStrapiReleaseTag}`,
          label: {
            id: "global.see-more"
          }
        },
        blockTransition: true,
        onClose: () => localStorage.setItem("STRAPI_UPDATE_NOTIF", true)
      });
    }
  }, [latestStrapiReleaseTag, shouldUpdateStrapi, toggleNotification]);
  return null;
};
/* harmony default export */ const hooks_useReleaseNotification = ((/* unused pure expression or super */ null && (useReleaseNotification)));

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useThemeToggle/index.js


const useThemeToggle = () => {
  const context = (0,react.useContext)(contexts/* ThemeToggleContext */.ZY);
  return context;
};
/* harmony default export */ const hooks_useThemeToggle = (useThemeToggle);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useRegenerate/index.js
var useRegenerate_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




const useRegenerate = (id, onRegenerate) => {
  const [isLoadingConfirmation, setIsLoadingConfirmation] = (0,react.useState)(false);
  const toggleNotification = (0,build.useNotification)();
  const regenerateData = () => useRegenerate_async(void 0, null, function* () {
    try {
      const {
        data: {
          data: { accessKey }
        }
      } = yield utils/* axiosInstance */.SP.post(`/admin/api-tokens/${id}/regenerate`);
      setIsLoadingConfirmation(false);
      onRegenerate(accessKey);
    } catch (error) {
      setIsLoadingConfirmation(false);
      toggleNotification({
        type: "warning",
        message: (0,lodash.get)(error, "response.data.message", "notification.error")
      });
    }
  });
  return {
    regenerateData,
    isLoadingConfirmation
  };
};
/* harmony default export */ const hooks_useRegenerate = (useRegenerate);

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/index.js














/***/ }),

/***/ 31055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19781);


const useConfigurations = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts__WEBPACK_IMPORTED_MODULE_1__/* .ConfigurationsContext */ .tm);
  return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useConfigurations);


/***/ }),

/***/ 22693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([]);


/***/ }),

/***/ 32420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  VP: () => (/* binding */ Column),
  A1: () => (/* binding */ LayoutContent),
  Ay: () => (/* binding */ layouts_UnauthenticatedLayout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(8162);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(47932);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(76686);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(89520);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/SimpleMenu.js
var SimpleMenu = __webpack_require__(27132);
// EXTERNAL MODULE: ./.cache/admin/src/components/LocalesProvider/useLocalesProvider.js
var useLocalesProvider = __webpack_require__(67366);
;// CONCATENATED MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/LocaleToggle/index.js




const LocaleToggle = () => {
  const { changeLocale, localeNames } = (0,useLocalesProvider/* default */.A)();
  const { locale } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(SimpleMenu.SimpleMenu, { label: localeNames[locale] }, Object.keys(localeNames).map((lang) => /* @__PURE__ */ react.createElement(SimpleMenu.MenuItem, { onClick: () => changeLocale(lang), key: lang }, localeNames[lang])));
};
/* harmony default export */ const UnauthenticatedLayout_LocaleToggle = (LocaleToggle);

;// CONCATENATED MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/index.js






const Wrapper = (0,styled_components_browser_cjs["default"])((0,Box.Box))`
  margin: 0 auto;
  width: 552px;
`;
const Column = (0,styled_components_browser_cjs["default"])((0,Flex.Flex))`
  flex-direction: column;
`;
const LayoutContent = ({ children }) => /* @__PURE__ */ react.createElement(
  Wrapper,
  {
    shadow: "tableShadow",
    hasRadius: true,
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 10,
    paddingRight: 10,
    background: "neutral0",
    justifyContent: "center"
  },
  children
);
LayoutContent.propTypes = {
  children: (prop_types_default()).node.isRequired
};
const UnauthenticatedLayout = ({ children }) => {
  return /* @__PURE__ */ react.createElement("div", null, /* @__PURE__ */ react.createElement(Flex.Flex, { as: "header", justifyContent: "flex-end" }, /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 6, paddingRight: 8 }, /* @__PURE__ */ react.createElement(UnauthenticatedLayout_LocaleToggle, null))), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 2, paddingBottom: 11 }, children));
};
UnauthenticatedLayout.propTypes = {
  children: (prop_types_default()).node.isRequired
};
/* harmony default export */ const layouts_UnauthenticatedLayout = (UnauthenticatedLayout);


/***/ }),

/***/ 8689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const customRoutes = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customRoutes);


/***/ }),

/***/ 19175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8162);
/* harmony import */ var _strapi_design_system_Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15993);
/* harmony import */ var _strapi_design_system_Field__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Field__WEBPACK_IMPORTED_MODULE_0__);


const FieldActionWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_strapi_design_system_Field__WEBPACK_IMPORTED_MODULE_0__.FieldAction))`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldActionWrapper);


/***/ }),

/***/ 20049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29434);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_icons_EyeStriked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62994);
/* harmony import */ var _strapi_icons_EyeStriked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_EyeStriked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strapi_icons_Eye__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55966);
/* harmony import */ var _strapi_icons_Eye__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_Eye__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47932);
/* harmony import */ var _strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_design_system_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10661);
/* harmony import */ var _strapi_design_system_Stack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Stack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10848);
/* harmony import */ var _strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76686);
/* harmony import */ var _strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _strapi_design_system_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60245);
/* harmony import */ var _strapi_design_system_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _strapi_design_system_TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69668);
/* harmony import */ var _strapi_design_system_TextInput__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_TextInput__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _strapi_design_system_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36172);
/* harmony import */ var _strapi_design_system_Checkbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Checkbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63760);
/* harmony import */ var _strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89520);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8162);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25221);
/* harmony import */ var _layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32420);
/* harmony import */ var _components_UnauthenticatedLogo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(94550);
/* harmony import */ var _FieldActionWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(19175);



















const PasswordInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_15__["default"])((0,_strapi_design_system_TextInput__WEBPACK_IMPORTED_MODULE_9__.TextInput))`
  ::-ms-reveal {
    display: none;
  }
`;
const Login = ({ onSubmit, schema, children }) => {
  const [passwordShown, setPasswordShown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_16__.useIntl)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_6__.Main, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_12__/* .LayoutContent */ .A1, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    formik__WEBPACK_IMPORTED_MODULE_17__.Formik,
    {
      enableReinitialize: true,
      initialValues: {
        email: "",
        password: "",
        rememberMe: false
      },
      onSubmit,
      validationSchema: schema,
      validateOnChange: false
    },
    ({ values, errors, handleChange }) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.Form, { noValidate: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_12__/* .Column */ .VP, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UnauthenticatedLogo__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_4__.Box, { paddingTop: 6, paddingBottom: 1 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_11__.Typography, { variant: "alpha", as: "h1" }, formatMessage({
      id: "Auth.form.welcome.title",
      defaultMessage: "Welcome!"
    }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_4__.Box, { paddingBottom: 7 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_11__.Typography, { variant: "epsilon", textColor: "neutral600" }, formatMessage({
      id: "Auth.form.welcome.subtitle",
      defaultMessage: "Log in to your Strapi account"
    }))), errors.errorMessage && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_11__.Typography,
      {
        id: "global-form-error",
        role: "alert",
        tabIndex: -1,
        textColor: "danger600"
      },
      errors.errorMessage
    )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Stack__WEBPACK_IMPORTED_MODULE_5__.Stack, { spacing: 6 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system_TextInput__WEBPACK_IMPORTED_MODULE_9__.TextInput,
      {
        error: errors.email ? formatMessage({
          id: errors.email,
          defaultMessage: "This value is required."
        }) : "",
        value: values.email,
        onChange: handleChange,
        label: formatMessage({ id: "Auth.form.email.label", defaultMessage: "Email" }),
        placeholder: formatMessage({
          id: "Auth.form.email.placeholder",
          defaultMessage: "kai@doe.com"
        }),
        name: "email",
        required: true
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      PasswordInput,
      {
        error: errors.password ? formatMessage({
          id: errors.password,
          defaultMessage: "This value is required."
        }) : "",
        onChange: handleChange,
        value: values.password,
        label: formatMessage({
          id: "global.password",
          defaultMessage: "Password"
        }),
        name: "password",
        type: passwordShown ? "text" : "password",
        endAction: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          _FieldActionWrapper__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,
          {
            onClick: (e) => {
              e.stopPropagation();
              setPasswordShown((prev) => !prev);
            },
            label: formatMessage(
              passwordShown ? {
                id: "Auth.form.password.show-password",
                defaultMessage: "Show password"
              } : {
                id: "Auth.form.password.hide-password",
                defaultMessage: "Hide password"
              }
            )
          },
          passwordShown ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement((_strapi_icons_Eye__WEBPACK_IMPORTED_MODULE_3___default()), null) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement((_strapi_icons_EyeStriked__WEBPACK_IMPORTED_MODULE_2___default()), null)
        ),
        required: true
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system_Checkbox__WEBPACK_IMPORTED_MODULE_10__.Checkbox,
      {
        onValueChange: (checked) => {
          handleChange({ target: { value: checked, name: "rememberMe" } });
        },
        value: values.rememberMe,
        "aria-label": "rememberMe",
        name: "rememberMe"
      },
      formatMessage({
        id: "Auth.form.rememberMe.label",
        defaultMessage: "Remember me"
      })
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Button__WEBPACK_IMPORTED_MODULE_8__.Button, { fullWidth: true, type: "submit" }, formatMessage({ id: "Auth.form.button.login", defaultMessage: "Login" }))))
  ), children), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_7__.Flex, { justifyContent: "center" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_4__.Box, { paddingTop: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.Link, { to: "/auth/forgot-password" }, formatMessage({
    id: "Auth.link.forgot-password",
    defaultMessage: "Forgot your password?"
  })))));
};
Login.defaultProps = {
  children: null,
  onSubmit() {
  }
};
Login.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().node),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().func),
  schema: prop_types__WEBPACK_IMPORTED_MODULE_18___default().shape({
    type: (prop_types__WEBPACK_IMPORTED_MODULE_18___default().string).isRequired
  }).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 36191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BaseLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20049);
/* harmony import */ var _layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32420);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};




const Login = (loginProps) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseLogin__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, __spreadValues({}, loginProps)));
};
Login.defaultProps = {
  onSubmit: (e) => e.preventDefault()
};
Login.propTypes = {
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 49021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29434);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10848);
/* harmony import */ var _strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25443);
/* harmony import */ var _strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_design_system_EmptyStateLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60089);
/* harmony import */ var _strapi_design_system_EmptyStateLayout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_EmptyStateLayout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_icons_EmptyPictures__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50237);
/* harmony import */ var _strapi_icons_EmptyPictures__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_EmptyPictures__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strapi_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42778);
/* harmony import */ var _strapi_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_strapi_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89520);








const NoContentType = () => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.useFocusWhenNavigate)();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Main__WEBPACK_IMPORTED_MODULE_2__.Main, { labelledBy: "title" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3__.HeaderLayout,
    {
      id: "title",
      title: formatMessage({
        id: "content-manager.pageNotFound",
        defaultMessage: "Page not found"
      })
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Layout__WEBPACK_IMPORTED_MODULE_3__.ContentLayout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    _strapi_design_system_EmptyStateLayout__WEBPACK_IMPORTED_MODULE_4__.EmptyStateLayout,
    {
      action: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_1__.LinkButton, { variant: "secondary", endIcon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement((_strapi_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_6___default()), null), to: "/" }, formatMessage({
        id: "app.components.NotFoundPage.back",
        defaultMessage: "Back to homepage"
      })),
      content: formatMessage({
        id: "app.page.not.found",
        defaultMessage: "Oops! We can't seem to find the page you're looging for..."
      }),
      hasRadius: true,
      icon: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement((_strapi_icons_EmptyPictures__WEBPACK_IMPORTED_MODULE_5___default()), { width: "10rem" }),
      shadow: "tableShadow"
    }
  )));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoContentType);


/***/ }),

/***/ 49949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});


/***/ }),

/***/ 34179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatAPIError = ({ data }) => {
  try {
    return Object.keys(data).reduce((acc, current) => {
      const errorMessage = data[current][0];
      acc[current] = {
        id: errorMessage,
        defaultMessage: errorMessage
      };
      return acc;
    }, {});
  } catch (err) {
    return {};
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatAPIError);


/***/ }),

/***/ 6576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  RB: () => (/* reexport */ utils_checkFormValidity),
  un: () => (/* reexport */ utils_createRoute),
  N_: () => (/* reexport */ formatAPIErrors/* default */.A),
  dS: () => (/* reexport */ getFullName),
  rh: () => (/* reexport */ utils_getRequestUrl),
  _f: () => (/* reexport */ utils_makeUniqueRoutes)
});

// UNUSED EXPORTS: getAttributesToDisplay, getExistingActions, sortLinks

// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(29434);
;// CONCATENATED MODULE: ./.cache/admin/src/utils/checkFormValidity.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const checkFormValidity = (data, schema) => __async(void 0, null, function* () {
  let errors = null;
  try {
    yield schema.validate(data, { abortEarly: false });
  } catch (err) {
    errors = (0,build.getYupInnerErrors)(err);
  }
  return errors;
});
/* harmony default export */ const utils_checkFormValidity = (checkFormValidity);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5556);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(79296);
;// CONCATENATED MODULE: ./.cache/admin/src/utils/createRoute.js
/* provided dependency */ var console = __webpack_require__(96763);
var createRoute_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




const LazyCompo = ({ loadComponent }) => {
  const [Compo, setCompo] = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    const loadCompo = () => createRoute_async(void 0, null, function* () {
      try {
        const loadedCompo = yield loadComponent();
        setCompo(() => loadedCompo.default);
      } catch (err) {
        console.log(err);
      }
    });
    loadCompo();
  }, [loadComponent]);
  if (Compo) {
    return /* @__PURE__ */ react.createElement(Compo, null);
  }
  return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
};
const createRoute = (Component, to, exact) => {
  return /* @__PURE__ */ react.createElement(
    react_router_dom_min.Route,
    {
      render: () => /* @__PURE__ */ react.createElement(LazyCompo, { loadComponent: Component }),
      key: to,
      path: to,
      exact: exact || false
    }
  );
};
LazyCompo.propTypes = {
  loadComponent: (prop_types_default()).func.isRequired
};
/* harmony default export */ const utils_createRoute = (createRoute);

// EXTERNAL MODULE: ./.cache/admin/src/utils/formatAPIErrors.js
var formatAPIErrors = __webpack_require__(34179);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(2543);
;// CONCATENATED MODULE: ./.cache/admin/src/utils/getAttributesToDisplay.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

const getAttributesToDisplay = (contentType) => {
  const timestamps = get(contentType, ["options", "timestamps"]);
  let timestampsArray = Array.isArray(timestamps) ? timestamps : [];
  const idsAttributes = ["id", "_id"];
  const unwritableAttributes = [...idsAttributes, ...timestampsArray, "publishedAt"];
  const schemaAttributes = get(contentType, ["attributes"], {});
  return Object.keys(schemaAttributes).reduce((acc, current) => {
    if (!unwritableAttributes.includes(current)) {
      acc.push(__spreadProps(__spreadValues({}, schemaAttributes[current]), { attributeName: current }));
    }
    return acc;
  }, []);
};
/* harmony default export */ const utils_getAttributesToDisplay = ((/* unused pure expression or super */ null && (getAttributesToDisplay)));

;// CONCATENATED MODULE: ./.cache/admin/src/utils/makeUniqueRoutes.js
const makeUniqueRoutes = (routes) => routes.filter((route, index, refArray) => {
  return refArray.findIndex((obj) => obj.key === route.key) === index;
});
/* harmony default export */ const utils_makeUniqueRoutes = (makeUniqueRoutes);

;// CONCATENATED MODULE: ./.cache/admin/src/utils/sortLinks.js

const sortLinks = (links) => sortBy(links, (object) => object.name);
/* harmony default export */ const utils_sortLinks = ((/* unused pure expression or super */ null && (sortLinks)));

;// CONCATENATED MODULE: ./.cache/admin/src/utils/getExistingActions.js

const getExistingActions = (permissions) => {
  return Array.from(
    new Set(
      Object.entries(permissions).reduce((acc, current) => {
        const getActionsPermission = (permission) => permission.reduce((accAction, currentAction) => {
          let actionsToReturn = accAction;
          if (currentAction.actions) {
            actionsToReturn = [...actionsToReturn, ...currentAction.actions];
          }
          if (typeof currentAction === "object" && !currentAction.actions) {
            actionsToReturn = [...actionsToReturn, ...Object.keys(currentAction)];
          }
          return actionsToReturn;
        }, []);
        return [
          ...acc,
          ...getActionsPermission([
            ...Object.values(current[1].attributes || {}),
            get(current[1], "contentTypeActions", {})
          ])
        ];
      }, [])
    )
  );
};
/* harmony default export */ const utils_getExistingActions = ((/* unused pure expression or super */ null && (getExistingActions)));

;// CONCATENATED MODULE: ./.cache/admin/src/utils/getRequestUrl.js
const getRequestUrl = (path) => `/admin/${path}`;
/* harmony default export */ const utils_getRequestUrl = (getRequestUrl);

;// CONCATENATED MODULE: ./.cache/admin/src/utils/getFullName.js
/* harmony default export */ const getFullName = ((firstname, lastname = "") => {
  return [firstname, lastname].filter((str) => str).join(" ");
});

;// CONCATENATED MODULE: ./.cache/admin/src/utils/index.js











/***/ }),

/***/ 10641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* reexport */ hooks_useAuthProviders)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(29434);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 8 modules
var utils = __webpack_require__(6576);
// EXTERNAL MODULE: ./node_modules/immer/dist/immer.cjs.production.min.js
var immer_cjs_production_min = __webpack_require__(56477);
;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useAuthProviders/reducer.js

const initialState = {
  data: [],
  isLoading: true
};
const reducer = (state, action) => (0,immer_cjs_production_min["default"])(state, (draftState) => {
  switch (action.type) {
    case "GET_DATA_SUCCEEDED": {
      draftState.data = action.data;
      draftState.isLoading = false;
      break;
    }
    case "GET_DATA_ERROR": {
      draftState.isLoading = false;
      break;
    }
    default:
      return draftState;
  }
});
/* harmony default export */ const useAuthProviders_reducer = (reducer);

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/useAuthProviders/index.js
/* provided dependency */ var console = __webpack_require__(96763);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};




const useAuthProviders = ({ ssoEnabled }) => {
  const [state, dispatch] = (0,react.useReducer)(useAuthProviders_reducer, initialState);
  const toggleNotification = (0,build.useNotification)();
  (0,react.useEffect)(() => {
    fetchAuthProviders();
  }, []);
  const fetchAuthProviders = () => __async(void 0, null, function* () {
    try {
      if (!ssoEnabled) {
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data: []
        });
        return;
      }
      const requestUrl = (0,utils/* getRequestUrl */.rh)("providers");
      const data = yield (0,build.request)(requestUrl, { method: "GET" });
      dispatch({
        type: "GET_DATA_SUCCEEDED",
        data
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: "GET_DATA_ERROR"
      });
      toggleNotification({
        type: "warning",
        message: { id: "notification.error" }
      });
    }
  });
  return state;
};
/* harmony default export */ const hooks_useAuthProviders = (useAuthProviders);

;// CONCATENATED MODULE: ./.cache/ee/admin/hooks/index.js



/***/ }),

/***/ 75299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _admin_src_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84060);

const ssoGlobalRoutes = strapi.features.isEnabled(strapi.features.SSO) ? [
  {
    intlLabel: { id: "Settings.sso.title", defaultMessage: "Single Sign-On" },
    to: "/settings/single-sign-on",
    id: "sso",
    isDisplayed: false,
    permissions: _admin_src_permissions__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.settings.sso.main
  }
] : [];
const customGlobalLinks = [...ssoGlobalRoutes];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customGlobalLinks);


/***/ }),

/***/ 32874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ utils_customRoutes)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(79296);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(89520);
// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__(12215);
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(29434);
// EXTERNAL MODULE: ./.cache/admin/src/utils/index.js + 8 modules
var utils = __webpack_require__(6576);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/AuthResponse/index.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};






const AuthResponse = () => {
  const {
    params: { authResponse }
  } = (0,react_router_dom_min.useRouteMatch)("/auth/login/:authResponse");
  const { formatMessage } = (0,react_intl.useIntl)();
  const { push } = (0,react_router_dom_min.useHistory)();
  const formatMessageRef = (0,react.useRef)(formatMessage);
  let redirectToOops = (0,react.useCallback)(() => {
    push(
      `/auth/oops?info=${encodeURIComponent(
        formatMessageRef.current({
          id: "Auth.form.button.login.providers.error",
          defaultMessage: "We cannot connect you through the selected provider."
        })
      )}`
    );
  }, [push]);
  const fetchUserInfo = (0,react.useCallback)(() => __async(void 0, null, function* () {
    try {
      const jwtToken = js_cookie_default().get("jwtToken");
      build.auth.clearAppStorage();
      if (jwtToken) {
        build.auth.setToken(jwtToken, true);
        const requestUrl = (0,utils/* getRequestUrl */.rh)("users/me");
        const { data } = yield (0,build.request)(requestUrl, { method: "GET" });
        build.auth.setUserInfo(data, true);
        js_cookie_default().remove("jwtToken");
        push("/auth/login");
      }
    } catch (e) {
      redirectToOops();
    }
  }), [push, redirectToOops]);
  (0,react.useEffect)(() => {
    if (authResponse === "error") {
      redirectToOops();
    }
    if (authResponse === "success") {
      fetchUserInfo();
    }
  }, [authResponse, fetchUserInfo, redirectToOops]);
  return /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null);
};
/* harmony default export */ const pages_AuthResponse = (AuthResponse);

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/App/utils/customRoutes.js

const customRoutes = [
  {
    Component: () => ({ default: pages_AuthResponse }),
    to: "/auth/login/:authResponse",
    exact: true
  }
];
/* harmony default export */ const utils_customRoutes = (customRoutes);


/***/ }),

/***/ 54253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8162);
/* harmony import */ var _strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47932);
/* harmony import */ var _strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76686);
/* harmony import */ var _strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strapi_design_system_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82940);
/* harmony import */ var _strapi_design_system_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_design_system_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10661);
/* harmony import */ var _strapi_design_system_Stack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Stack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63760);
/* harmony import */ var _strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89520);
/* harmony import */ var _admin_src_pages_AuthPage_components_Login_BaseLogin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20049);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10641);
/* harmony import */ var _admin_src_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32420);
/* harmony import */ var _Providers_SSOProviders__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28783);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};













const DividerFull = (0,styled_components__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_strapi_design_system_Divider__WEBPACK_IMPORTED_MODULE_3__.Divider))`
  flex: 1;
`;
const Login = (loginProps) => {
  const ssoEnabled = strapi.features.isEnabled(strapi.features.SSO);
  const { isLoading, data: providers } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAuthProviders */ .E)({ ssoEnabled });
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_11__.useIntl)();
  if (!ssoEnabled || !isLoading && providers.length === 0) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_AuthPage_components_Login_BaseLogin__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, __spreadValues({}, loginProps)));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_layouts_UnauthenticatedLayout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_admin_src_pages_AuthPage_components_Login_BaseLogin__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, __spreadValues({}, loginProps), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_1__.Box, { paddingTop: 7 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Stack__WEBPACK_IMPORTED_MODULE_4__.Stack, { spacing: 7 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_2__.Flex, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DividerFull, null), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Box__WEBPACK_IMPORTED_MODULE_1__.Box, { paddingLeft: 3, paddingRight: 3 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_5__.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "Auth.login.sso.divider" }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DividerFull, null)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Providers_SSOProviders__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, { providers, displayAllProviders: false })))));
};
Login.defaultProps = {
  onSubmit: (e) => e.preventDefault(),
  requestError: null
};
Login.propTypes = {
  formErrors: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object).isRequired,
  modifiedData: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object).isRequired,
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func).isRequired,
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().func),
  requestError: (prop_types__WEBPACK_IMPORTED_MODULE_12___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 28783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strapi_design_system_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54109);
/* harmony import */ var _strapi_design_system_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76686);
/* harmony import */ var _strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63760);
/* harmony import */ var _strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _strapi_design_system_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46290);
/* harmony import */ var _strapi_design_system_Tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_strapi_design_system_Tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8162);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89520);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79296);









const SSOButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a`
  width: ${136 / 16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48 / 16}rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({ theme }) => theme.colors.neutral600};
`;
const SSOProvidersWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_strapi_design_system_Flex__WEBPACK_IMPORTED_MODULE_2__.Flex))`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({ theme }) => theme.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({ theme }) => theme.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({ theme }) => theme.spaces[2]};
  }
`;
const SSOProviderButton = ({ provider }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { label: provider.displayName }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOButton, { href: `${strapi.backendURL}/admin/connect/${provider.uid}` }, provider.icon ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: provider.icon, "aria-hidden": true, alt: "", height: "32px" }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Typography__WEBPACK_IMPORTED_MODULE_3__.Typography, null, provider.displayName)));
};
SSOProviderButton.propTypes = {
  provider: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    displayName: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,
    uid: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired
  }).isRequired
};
const SSOProviders = ({ providers, displayAllProviders }) => {
  const { formatMessage } = (0,react_intl__WEBPACK_IMPORTED_MODULE_7__.useIntl)();
  if (displayAllProviders) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Grid__WEBPACK_IMPORTED_MODULE_1__.Grid, { gap: 4 }, providers.map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Grid__WEBPACK_IMPORTED_MODULE_1__.GridItem, { key: provider.uid, col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { provider }))));
  }
  if (providers.length > 2 && !displayAllProviders) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Grid__WEBPACK_IMPORTED_MODULE_1__.Grid, { gap: 4 }, providers.slice(0, 2).map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Grid__WEBPACK_IMPORTED_MODULE_1__.GridItem, { key: provider.uid, col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { provider }))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_strapi_design_system_Grid__WEBPACK_IMPORTED_MODULE_1__.GridItem, { col: 4 }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      _strapi_design_system_Tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
      {
        label: formatMessage({
          id: "global.see-more"
        })
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOButton, { as: react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, to: "/auth/providers" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { "aria-hidden": true }, "\u2022\u2022\u2022"))
    )));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProvidersWrapper, { justifyContent: "center" }, providers.map((provider) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SSOProviderButton, { key: provider.uid, provider })));
};
SSOProviders.defaultProps = {
  displayAllProviders: true
};
SSOProviders.propTypes = {
  providers: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)).isRequired,
  displayAllProviders: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SSOProviders);


/***/ }),

/***/ 69130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AuthPage_utils_forms)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(79296);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(8162);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(29434);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Divider.js
var Divider = __webpack_require__(82940);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Stack.js
var Stack = __webpack_require__(10661);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Flex.js
var Flex = __webpack_require__(76686);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Box.js
var Box = __webpack_require__(47932);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(60245);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Loader.js
var Loader = __webpack_require__(29070);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(63760);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(10848);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(89520);
// EXTERNAL MODULE: ./.cache/ee/admin/hooks/index.js + 2 modules
var hooks = __webpack_require__(10641);
// EXTERNAL MODULE: ./.cache/admin/src/layouts/UnauthenticatedLayout/index.js + 1 modules
var UnauthenticatedLayout = __webpack_require__(32420);
// EXTERNAL MODULE: ./.cache/ee/admin/pages/AuthPage/components/Providers/SSOProviders.js
var SSOProviders = __webpack_require__(28783);
// EXTERNAL MODULE: ./.cache/admin/src/components/UnauthenticatedLogo/index.js
var UnauthenticatedLogo = __webpack_require__(94550);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/AuthPage/components/Providers/index.js

















const DividerFull = (0,styled_components_browser_cjs["default"])((0,Divider.Divider))`
  flex: 1;
`;
const Providers = () => {
  const ssoEnabled = strapi.features.isEnabled(strapi.features.SSO);
  const { push } = (0,react_router_dom_min.useHistory)();
  const { formatMessage } = (0,react_intl.useIntl)();
  const { isLoading, data: providers } = (0,hooks/* useAuthProviders */.E)({ ssoEnabled });
  const handleClick = () => {
    push("/auth/login");
  };
  if (!ssoEnabled || !isLoading && providers.length === 0) {
    return /* @__PURE__ */ react.createElement(react_router_dom_min.Redirect, { to: "/auth/login" });
  }
  return /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* default */.Ay, null, /* @__PURE__ */ react.createElement(Main.Main, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* LayoutContent */.A1, null, /* @__PURE__ */ react.createElement(UnauthenticatedLayout/* Column */.VP, null, /* @__PURE__ */ react.createElement(UnauthenticatedLogo/* default */.A, null), /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 6, paddingBottom: 1 }, /* @__PURE__ */ react.createElement(Typography.Typography, { as: "h1", variant: "alpha" }, formatMessage({ id: "Auth.form.welcome.title" }))), /* @__PURE__ */ react.createElement(Box.Box, { paddingBottom: 7 }, /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "epsilon", textColor: "neutral600" }, formatMessage({ id: "Auth.login.sso.subtitle" })))), /* @__PURE__ */ react.createElement(Stack.Stack, { spacing: 7 }, isLoading ? /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Loader.Loader, null, formatMessage({ id: "Auth.login.sso.loading" }))) : /* @__PURE__ */ react.createElement(SSOProviders/* default */.A, { providers }), /* @__PURE__ */ react.createElement(Flex.Flex, null, /* @__PURE__ */ react.createElement(DividerFull, null), /* @__PURE__ */ react.createElement(Box.Box, { paddingLeft: 3, paddingRight: 3 }, /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "sigma", textColor: "neutral600" }, formatMessage({ id: "or" }))), /* @__PURE__ */ react.createElement(DividerFull, null)), /* @__PURE__ */ react.createElement(Button.Button, { fullWidth: true, size: "L", onClick: handleClick }, formatMessage({ id: "Auth.form.button.login.strapi" })))), /* @__PURE__ */ react.createElement(Flex.Flex, { justifyContent: "center" }, /* @__PURE__ */ react.createElement(Box.Box, { paddingTop: 4 }, /* @__PURE__ */ react.createElement(build.Link, { to: "/auth/forgot-password" }, /* @__PURE__ */ react.createElement(Typography.Typography, { variant: "pi" }, formatMessage({ id: "Auth.link.forgot-password" })))))));
};
/* harmony default export */ const components_Providers = (Providers);

// EXTERNAL MODULE: ./.cache/admin/src/pages/AuthPage/utils/forms.js + 5 modules
var utils_forms = __webpack_require__(26003);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/AuthPage/utils/forms.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));


const forms_forms = __spreadProps(__spreadValues({}, utils_forms/* default */.A), {
  providers: {
    Component: components_Providers,
    endPoint: null,
    fieldsToDisable: [],
    fieldsToOmit: [],
    schema: null,
    inputsPrefix: ""
  }
});
/* harmony default export */ const AuthPage_utils_forms = (forms_forms);


/***/ }),

/***/ 86775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const customPermissions = {
  settings: {
    sso: {
      main: [{ action: "admin::provider-login.read", subject: null }],
      read: [{ action: "admin::provider-login.read", subject: null }],
      update: [{ action: "admin::provider-login.update", subject: null }]
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customPermissions);


/***/ })

}]);