/**
 * Test case for decorateMsg.
 * Runs with mocha.
 */
"use strict";

const decorateMsg = require("../lib/msg/decorate_msg.js");
const assert = require("assert");

describe("decorate", () => {
  it("Decorate msg", done => {
    if (process.env.CI) {
      return;
    }
    assert.ok(decorateMsg("foo", "green"));
    assert.equal(decorateMsg(null), null);
    done();
  });

  it("Decorate msg with invalid color.", done => {
    assert.throws(function() {
      decorateMsg("foo", "__not_existing_color");
    });
    done();
  });
});

/* global describe, it */
