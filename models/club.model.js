/**
 * @module app.schema.ClubModel
 * @description Club Model
 *
 * @requires mongoose.Schema
 * @requires mongoose.model
 *
 * @version schema:v1
 * @since 0.1.0
 */

import mongoose from 'mongoose';

/**
 * @description The schema definition for Club Model
 * @constant ClubSchema
 *
 * @type {mongoose.Schema}
 */
const ClubSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Media',
      required: true,
    },
    bio: {
      type: String,
      required: false,
      trim: true,
    },
    facebook: {
      type: String,
      required: false,
      trim: true,
    },
    twitter: {
      type: String,
      required: false,
      trim: true,
    },
    instagram: {
      type: String,
      required: false,
      trim: true,
    },
    linkedin: {
      type: String,
      required: false,
      trim: true,
    },
    youtube: {
      type: String,
      required: false,
      trim: true,
    },
    website: {
      type: String,
      required: false,
      trim: true,
      match: /^[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
    },
    github: {
      type: String,
      required: false,
      trim: true,
    },
    executive: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
        },
        picture: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Media',
          required: true,
        },
        nitrMail: {
          type: String,
          required: true,
          trim: true,
          match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@nitrkl\.ac\.in$/i,
          lowercase: true,
        },
        designation: {
          type: String,
          required: true,
          trim: true,
        },
      },
    ],
    isFest: {
      type: Boolean,
      required: false,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
      default: null,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false,
      default: null,
    },
    schemaVersion: {
      type: Number,
      required: false,
      default: 1,
      min: 1,
    },
  },
  {
    timestamps: true,
    collection: 'clubs',
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

/**
 * @description Generated Club Model
 * @constant ClubModel
 *
 * @type {mongoose.Model}
 */
export default mongoose.model('Club', ClubSchema);
