import React from "react";
import renderer from "react-test-renderer";
import Typography, { TypographyVariant_ENUM } from "./Typography";

describe("Typography tests", () => {
  it("Should Match H1 Snapshots", () => {
    const H1Typography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.h1}>
        Typography H1 Variant
      </Typography>
    );
    let tree = H1Typography.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should match H2 snapshot", () => {
    const H2Typography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.h2}>
        Typography H2 Variant
      </Typography>
    );
    let tree = H2Typography.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should Match H3 snapshots", () => {
    const H3Typography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.h3}>
        Typography H3 Variant
      </Typography>
    );
    let tree = H3Typography.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should Match H4 snapshots", () => {
    const H4Typography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.h4}>
        Typography H4 Variant
      </Typography>
    );
    let tree = H4Typography.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should Match H5 snapshots", () => {
    const H5Typography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.h5}>
        Typography H5 Variant
      </Typography>
    );
    let tree = H5Typography.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should Match H6 snapshots", () => {
    const H6Typography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.h6}>
        Typography H6 Variant
      </Typography>
    );
    let tree = H6Typography.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should Match p snapshots", () => {
    const PTypography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.p}>
        Typography p Variant
      </Typography>
    );
    let tree = PTypography.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should Match Link snapshots", () => {
    const LinkTypography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.link}>
        Typography link Variant
      </Typography>
    );
    let tree = LinkTypography.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render overriding classNames", () => {
    const LinkTypography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.link} override={"testClass"}>
        Typography link Variant
      </Typography>
    );

    expect(
      LinkTypography.root.findByProps({
        className: `${TypographyVariant_ENUM.link} testClass`,
      })
    ).not.toBe(null);
  });

  it("Should render style objects", () => {
    const style = { color: "red" };
    const LinkTypography = renderer.create(
      <Typography variant={TypographyVariant_ENUM.link} style={style}>
        Typography link Variant
      </Typography>
    );
    expect(
      LinkTypography.root.findByProps({
        style,
      })
    ).not.toBe(null);
  });
});
