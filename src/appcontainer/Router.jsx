/**
 * Main container for an application.
 *
 * Wraps the application with Theme, Error handler, Notifier and Router.
 * Wrappers can be configured with ThemeProps, NotifyProps and RouterProps.
 */

import React from "react";
import PropTypes from "prop-types";

import ErrorWrapper from "./ErrorWrapper";
import NotifyWrapper from "./NotifyWrapper";
import RouterWrapper from "./RouterWrapper";
import SuspenseWrapper from "./SuspenseWrapper";
import ThemeWrapper from "./ThemeWrapper";
import Wrapper from "./Wrapper";

/**
 * App main container.
 *
 * Wraps application with Theme, Error handler, Notifier and Router.
 * @param       {Object} [NotifyProps={}]   [description]
 * @param       {Object} [RouterProps={}]   [description]
 * @param       {Object} [SuspenseProps={}] [description]
 * @param       {Object} [ThemeProps={}]    [description]
 * @param       {Object} [WrapperProps={}}] [description]
 * @constructor
 */

export default function Router({
  NotifyProps = {},
  RouterProps = {},
  SuspenseProps = {},
  ThemeProps = {},
  WrapperProps = {}
}) {
  // TODO: can wrap everything in Wrapper:
  /*
  <Wrapper Children={[
    { Child: ThemeWrapper, ...ThemeProps },
    { Child: SuspenseWrapper, ...SuspenseProps },
    { Child: ErrorWrapper },
    { Child: NotifyWrapper, ...NotifyProps },
    ...WrapperProps.Children
  ]}>
  <RouterWrapper {...RouterProps} />
  </Wrapper>
   */
  return (
    <ThemeWrapper {...ThemeProps}>
      <SuspenseWrapper {...SuspenseProps}>
        <ErrorWrapper>
          <NotifyWrapper {...NotifyProps}>
            <Wrapper {...WrapperProps}>
              <RouterWrapper {...RouterProps} />
            </Wrapper>
          </NotifyWrapper>
        </ErrorWrapper>
      </SuspenseWrapper>
    </ThemeWrapper>
  );
}

Router.propTypes = {
  NotifyProps: PropTypes.object,
  RouterProps: PropTypes.object,
  SuspenseProps: PropTypes.object,
  ThemeProps: PropTypes.object,
  WrapperProps: PropTypes.object
};
