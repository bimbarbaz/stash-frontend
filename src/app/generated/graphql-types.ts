import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Log entries */
  Time: any;
  /**
   * Timestamp is a point in time. It is always output as RFC3339-compatible time points.
   * It can be input as a RFC3339 string, or as "<4h" for "4 hours in the past" or ">5m"
   * for "5 minutes in the future"
   */
  Timestamp: any;
  Upload: any;
};

export type AddTempDlnaipInput = {
  address: Scalars['String'];
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']>;
};

export type AutoTagMetadataInput = {
  /** Paths to tag, null for all files */
  paths?: InputMaybe<Array<Scalars['String']>>;
  /** IDs of performers to tag files with, or "*" for all */
  performers?: InputMaybe<Array<Scalars['String']>>;
  /** IDs of studios to tag files with, or "*" for all */
  studios?: InputMaybe<Array<Scalars['String']>>;
  /** IDs of tags to tag files with, or "*" for all */
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type AutoTagMetadataOptions = {
  __typename?: 'AutoTagMetadataOptions';
  /** IDs of performers to tag files with, or "*" for all */
  performers?: Maybe<Array<Scalars['String']>>;
  /** IDs of studios to tag files with, or "*" for all */
  studios?: Maybe<Array<Scalars['String']>>;
  /** IDs of tags to tag files with, or "*" for all */
  tags?: Maybe<Array<Scalars['String']>>;
};

export type BackupDatabaseInput = {
  download?: InputMaybe<Scalars['Boolean']>;
};

export type BulkGalleryUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<BulkUpdateIds>;
  rating?: InputMaybe<Scalars['Int']>;
  scene_ids?: InputMaybe<BulkUpdateIds>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  url?: InputMaybe<Scalars['String']>;
};

export type BulkImageUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  gallery_ids?: InputMaybe<BulkUpdateIds>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<BulkUpdateIds>;
  rating?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  title?: InputMaybe<Scalars['String']>;
};

export type BulkMovieUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  rating?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
};

export type BulkPerformerUpdateInput = {
  aliases?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['String']>;
  career_length?: InputMaybe<Scalars['String']>;
  clientMutationId?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  death_date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  eye_color?: InputMaybe<Scalars['String']>;
  fake_tits?: InputMaybe<Scalars['String']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<GenderEnum>;
  hair_color?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  instagram?: InputMaybe<Scalars['String']>;
  measurements?: InputMaybe<Scalars['String']>;
  piercings?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  tattoos?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type BulkSceneUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  gallery_ids?: InputMaybe<BulkUpdateIds>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  movie_ids?: InputMaybe<BulkUpdateIds>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<BulkUpdateIds>;
  rating?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export enum BulkUpdateIdMode {
  Add = 'ADD',
  Remove = 'REMOVE',
  Set = 'SET'
}

export type BulkUpdateIds = {
  ids?: InputMaybe<Array<Scalars['ID']>>;
  mode: BulkUpdateIdMode;
};

export type CleanMetadataInput = {
  /** Do a dry run. Don't delete any files */
  dryRun: Scalars['Boolean'];
  paths?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigDlnaInput = {
  /** True if DLNA service should be enabled by default */
  enabled?: InputMaybe<Scalars['Boolean']>;
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces?: InputMaybe<Array<Scalars['String']>>;
  serverName?: InputMaybe<Scalars['String']>;
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigDlnaResult = {
  __typename?: 'ConfigDLNAResult';
  /** True if DLNA service should be enabled by default */
  enabled: Scalars['Boolean'];
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces: Array<Scalars['String']>;
  serverName: Scalars['String'];
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs: Array<Scalars['String']>;
};

export type ConfigDefaultSettingsInput = {
  autoTag?: InputMaybe<AutoTagMetadataInput>;
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: InputMaybe<Scalars['Boolean']>;
  /** If true, delete generated files checkbox will be checked by default */
  deleteGenerated?: InputMaybe<Scalars['Boolean']>;
  generate?: InputMaybe<GenerateMetadataInput>;
  identify?: InputMaybe<IdentifyMetadataInput>;
  scan?: InputMaybe<ScanMetadataInput>;
};

export type ConfigDefaultSettingsResult = {
  __typename?: 'ConfigDefaultSettingsResult';
  autoTag?: Maybe<AutoTagMetadataOptions>;
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: Maybe<Scalars['Boolean']>;
  /** If true, delete generated supporting files checkbox will be checked by default */
  deleteGenerated?: Maybe<Scalars['Boolean']>;
  generate?: Maybe<GenerateMetadataOptions>;
  identify?: Maybe<IdentifyMetadataTaskOptions>;
  scan?: Maybe<ScanMetadataOptions>;
};

export type ConfigDisableDropdownCreate = {
  __typename?: 'ConfigDisableDropdownCreate';
  performer: Scalars['Boolean'];
  studio: Scalars['Boolean'];
  tag: Scalars['Boolean'];
};

export type ConfigDisableDropdownCreateInput = {
  performer?: InputMaybe<Scalars['Boolean']>;
  studio?: InputMaybe<Scalars['Boolean']>;
  tag?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigGeneralInput = {
  /** Path to cache */
  cachePath?: InputMaybe<Scalars['String']>;
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5?: InputMaybe<Scalars['Boolean']>;
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders?: InputMaybe<Scalars['Boolean']>;
  /** Custom Performer Image Location */
  customPerformerImageLocation?: InputMaybe<Scalars['String']>;
  /** Path to the SQLite database */
  databasePath?: InputMaybe<Scalars['String']>;
  /** Array of file regexp to exclude from Video Scans */
  excludes?: InputMaybe<Array<Scalars['String']>>;
  /** Array of gallery zip file extensions */
  galleryExtensions?: InputMaybe<Array<Scalars['String']>>;
  /** Path to generated files */
  generatedPath?: InputMaybe<Scalars['String']>;
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes?: InputMaybe<Array<Scalars['String']>>;
  /** Array of image file extensions */
  imageExtensions?: InputMaybe<Array<Scalars['String']>>;
  /** Whether to log http access */
  logAccess?: InputMaybe<Scalars['Boolean']>;
  /** Name of the log file */
  logFile?: InputMaybe<Scalars['String']>;
  /** Minimum log level */
  logLevel?: InputMaybe<Scalars['String']>;
  /** Whether to also output to stderr */
  logOut?: InputMaybe<Scalars['Boolean']>;
  /** Maximum session cookie age */
  maxSessionAge?: InputMaybe<Scalars['Int']>;
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: InputMaybe<StreamingResolutionEnum>;
  /** Max generated transcode size */
  maxTranscodeSize?: InputMaybe<StreamingResolutionEnum>;
  /** Path to import/export files */
  metadataPath?: InputMaybe<Scalars['String']>;
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks?: InputMaybe<Scalars['Int']>;
  /** Password */
  password?: InputMaybe<Scalars['String']>;
  /** Include audio stream in previews */
  previewAudio?: InputMaybe<Scalars['Boolean']>;
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars['String']>;
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars['String']>;
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>;
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars['Float']>;
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars['Int']>;
  /** Python path - resolved using path if unset */
  pythonPath?: InputMaybe<Scalars['String']>;
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: InputMaybe<Scalars['String']>;
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck?: InputMaybe<Scalars['Boolean']>;
  /** Scraper user agent string */
  scraperUserAgent?: InputMaybe<Scalars['String']>;
  /** Path to scrapers */
  scrapersPath?: InputMaybe<Scalars['String']>;
  /** Stash-box instances used for tagging */
  stashBoxes?: InputMaybe<Array<StashBoxInput>>;
  /** Array of file paths to content */
  stashes?: InputMaybe<Array<StashConfigInput>>;
  /** Comma separated list of proxies to allow traffic from */
  trustedProxies?: InputMaybe<Array<Scalars['String']>>;
  /** Username */
  username?: InputMaybe<Scalars['String']>;
  /** Array of video file extensions */
  videoExtensions?: InputMaybe<Array<Scalars['String']>>;
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm?: InputMaybe<HashAlgorithm>;
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigGeneralResult = {
  __typename?: 'ConfigGeneralResult';
  /** API Key */
  apiKey: Scalars['String'];
  /** Path to cache */
  cachePath: Scalars['String'];
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5: Scalars['Boolean'];
  /** Path to the config file used */
  configFilePath: Scalars['String'];
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders: Scalars['Boolean'];
  /** Custom Performer Image Location */
  customPerformerImageLocation?: Maybe<Scalars['String']>;
  /** Path to the SQLite database */
  databasePath: Scalars['String'];
  /** Array of file regexp to exclude from Video Scans */
  excludes: Array<Scalars['String']>;
  /** Array of gallery zip file extensions */
  galleryExtensions: Array<Scalars['String']>;
  /** Path to generated files */
  generatedPath: Scalars['String'];
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes: Array<Scalars['String']>;
  /** Array of image file extensions */
  imageExtensions: Array<Scalars['String']>;
  /** Whether to log http access */
  logAccess: Scalars['Boolean'];
  /** Name of the log file */
  logFile?: Maybe<Scalars['String']>;
  /** Minimum log level */
  logLevel: Scalars['String'];
  /** Whether to also output to stderr */
  logOut: Scalars['Boolean'];
  /** Maximum session cookie age */
  maxSessionAge: Scalars['Int'];
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: Maybe<StreamingResolutionEnum>;
  /** Max generated transcode size */
  maxTranscodeSize?: Maybe<StreamingResolutionEnum>;
  /** Path to import/export files */
  metadataPath: Scalars['String'];
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks: Scalars['Int'];
  /** Password */
  password: Scalars['String'];
  /** Include audio stream in previews */
  previewAudio: Scalars['Boolean'];
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd: Scalars['String'];
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart: Scalars['String'];
  /** Preset when generating preview */
  previewPreset: PreviewPreset;
  /** Preview segment duration, in seconds */
  previewSegmentDuration: Scalars['Float'];
  /** Number of segments in a preview file */
  previewSegments: Scalars['Int'];
  /** Python path - resolved using path if unset */
  pythonPath: Scalars['String'];
  /**
   * Scraper CDP path. Path to chrome executable or remote address
   * @deprecated use ConfigResult.scraping instead
   */
  scraperCDPPath?: Maybe<Scalars['String']>;
  /**
   * Whether the scraper should check for invalid certificates
   * @deprecated use ConfigResult.scraping instead
   */
  scraperCertCheck: Scalars['Boolean'];
  /**
   * Scraper user agent string
   * @deprecated use ConfigResult.scraping instead
   */
  scraperUserAgent?: Maybe<Scalars['String']>;
  /** Path to scrapers */
  scrapersPath: Scalars['String'];
  /** Stash-box instances used for tagging */
  stashBoxes: Array<StashBox>;
  /** Array of file paths to content */
  stashes: Array<StashConfig>;
  /**
   * Comma separated list of proxies to allow traffic from
   * @deprecated no longer supported
   */
  trustedProxies?: Maybe<Array<Scalars['String']>>;
  /** Username */
  username: Scalars['String'];
  /** Array of video file extensions */
  videoExtensions: Array<Scalars['String']>;
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm: HashAlgorithm;
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails: Scalars['Boolean'];
};

export type ConfigImageLightboxInput = {
  displayMode?: InputMaybe<ImageLightboxDisplayMode>;
  resetZoomOnNav?: InputMaybe<Scalars['Boolean']>;
  scaleUp?: InputMaybe<Scalars['Boolean']>;
  scrollMode?: InputMaybe<ImageLightboxScrollMode>;
  slideshowDelay?: InputMaybe<Scalars['Int']>;
};

export type ConfigImageLightboxResult = {
  __typename?: 'ConfigImageLightboxResult';
  displayMode?: Maybe<ImageLightboxDisplayMode>;
  resetZoomOnNav?: Maybe<Scalars['Boolean']>;
  scaleUp?: Maybe<Scalars['Boolean']>;
  scrollMode?: Maybe<ImageLightboxScrollMode>;
  slideshowDelay?: Maybe<Scalars['Int']>;
};

export type ConfigInterfaceInput = {
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: InputMaybe<Scalars['Boolean']>;
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: InputMaybe<Scalars['Boolean']>;
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: InputMaybe<Scalars['Boolean']>;
  /** Custom CSS */
  css?: InputMaybe<Scalars['String']>;
  cssEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Set to true to disable creating new objects via the dropdown menus */
  disableDropdownCreate?: InputMaybe<ConfigDisableDropdownCreateInput>;
  /** Funscript Time Offset */
  funscriptOffset?: InputMaybe<Scalars['Int']>;
  /** Handy Connection Key */
  handyKey?: InputMaybe<Scalars['String']>;
  imageLightbox?: InputMaybe<ConfigImageLightboxInput>;
  /** Interface language */
  language?: InputMaybe<Scalars['String']>;
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: InputMaybe<Scalars['Int']>;
  /** Ordered list of items that should be shown in the menu */
  menuItems?: InputMaybe<Array<Scalars['String']>>;
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: InputMaybe<Scalars['Boolean']>;
  /** True if we should send notifications to the desktop */
  notificationsEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Show scene scrubber by default */
  showScrubber?: InputMaybe<Scalars['Boolean']>;
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: InputMaybe<Scalars['Boolean']>;
  /** Slideshow Delay */
  slideshowDelay?: InputMaybe<Scalars['Int']>;
  /** Enable sound on mouseover previews */
  soundOnPreview?: InputMaybe<Scalars['Boolean']>;
  /** Wall playback type */
  wallPlayback?: InputMaybe<Scalars['String']>;
  /** Show title and tags in wall view */
  wallShowTitle?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigInterfaceResult = {
  __typename?: 'ConfigInterfaceResult';
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: Maybe<Scalars['Boolean']>;
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: Maybe<Scalars['Boolean']>;
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: Maybe<Scalars['Boolean']>;
  /** Custom CSS */
  css?: Maybe<Scalars['String']>;
  cssEnabled?: Maybe<Scalars['Boolean']>;
  /** Fields are true if creating via dropdown menus are disabled */
  disableDropdownCreate: ConfigDisableDropdownCreate;
  /** @deprecated Use disableDropdownCreate */
  disabledDropdownCreate: ConfigDisableDropdownCreate;
  /** Funscript Time Offset */
  funscriptOffset?: Maybe<Scalars['Int']>;
  /** Handy Connection Key */
  handyKey?: Maybe<Scalars['String']>;
  imageLightbox: ConfigImageLightboxResult;
  /** Interface language */
  language?: Maybe<Scalars['String']>;
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: Maybe<Scalars['Int']>;
  /** Ordered list of items that should be shown in the menu */
  menuItems?: Maybe<Array<Scalars['String']>>;
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: Maybe<Scalars['Boolean']>;
  /** True if we should send desktop notifications */
  notificationsEnabled?: Maybe<Scalars['Boolean']>;
  /** Show scene scrubber by default */
  showScrubber?: Maybe<Scalars['Boolean']>;
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: Maybe<Scalars['Boolean']>;
  /**
   * Slideshow Delay
   * @deprecated Use imageLightbox.slideshowDelay
   */
  slideshowDelay?: Maybe<Scalars['Int']>;
  /** Enable sound on mouseover previews */
  soundOnPreview?: Maybe<Scalars['Boolean']>;
  /** Wall playback type */
  wallPlayback?: Maybe<Scalars['String']>;
  /** Show title and tags in wall view */
  wallShowTitle?: Maybe<Scalars['Boolean']>;
};

/** All configuration settings */
export type ConfigResult = {
  __typename?: 'ConfigResult';
  defaults: ConfigDefaultSettingsResult;
  dlna: ConfigDlnaResult;
  general: ConfigGeneralResult;
  interface: ConfigInterfaceResult;
  scraping: ConfigScrapingResult;
};

export type ConfigScrapingInput = {
  /** Tags blacklist during scraping */
  excludeTagPatterns?: InputMaybe<Array<Scalars['String']>>;
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: InputMaybe<Scalars['String']>;
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck?: InputMaybe<Scalars['Boolean']>;
  /** Scraper user agent string */
  scraperUserAgent?: InputMaybe<Scalars['String']>;
};

export type ConfigScrapingResult = {
  __typename?: 'ConfigScrapingResult';
  /** Tags blacklist during scraping */
  excludeTagPatterns: Array<Scalars['String']>;
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: Maybe<Scalars['String']>;
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck: Scalars['Boolean'];
  /** Scraper user agent string */
  scraperUserAgent?: Maybe<Scalars['String']>;
};

export enum CriterionModifier {
  /** >= AND <= */
  Between = 'BETWEEN',
  /** = */
  Equals = 'EQUALS',
  Excludes = 'EXCLUDES',
  /** > */
  GreaterThan = 'GREATER_THAN',
  Includes = 'INCLUDES',
  /** INCLUDES ALL */
  IncludesAll = 'INCLUDES_ALL',
  /** IS NULL */
  IsNull = 'IS_NULL',
  /** < */
  LessThan = 'LESS_THAN',
  /** MATCHES REGEX */
  MatchesRegex = 'MATCHES_REGEX',
  /** < OR > */
  NotBetween = 'NOT_BETWEEN',
  /** != */
  NotEquals = 'NOT_EQUALS',
  /** NOT MATCHES REGEX */
  NotMatchesRegex = 'NOT_MATCHES_REGEX',
  /** IS NOT NULL */
  NotNull = 'NOT_NULL'
}

export type Dlnaip = {
  __typename?: 'DLNAIP';
  ipAddress: Scalars['String'];
  /** Time until IP will be no longer allowed/disallowed */
  until?: Maybe<Scalars['Time']>;
};

export type DlnaStatus = {
  __typename?: 'DLNAStatus';
  allowedIPAddresses: Array<Dlnaip>;
  recentIPAddresses: Array<Scalars['String']>;
  running: Scalars['Boolean'];
  /** If not currently running, time until it will be started. If running, time until it will be stopped */
  until?: Maybe<Scalars['Time']>;
};

export type DestroyFilterInput = {
  id: Scalars['ID'];
};

/** Directory structure of a path */
export type Directory = {
  __typename?: 'Directory';
  directories: Array<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  path: Scalars['String'];
};

export type DisableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']>;
};

export type EnableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']>;
};

export type ExportObjectTypeInput = {
  all?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
};

export type ExportObjectsInput = {
  galleries?: InputMaybe<ExportObjectTypeInput>;
  images?: InputMaybe<ExportObjectTypeInput>;
  includeDependencies?: InputMaybe<Scalars['Boolean']>;
  movies?: InputMaybe<ExportObjectTypeInput>;
  performers?: InputMaybe<ExportObjectTypeInput>;
  scenes?: InputMaybe<ExportObjectTypeInput>;
  studios?: InputMaybe<ExportObjectTypeInput>;
  tags?: InputMaybe<ExportObjectTypeInput>;
};

export enum FilterMode {
  Galleries = 'GALLERIES',
  Images = 'IMAGES',
  Movies = 'MOVIES',
  Performers = 'PERFORMERS',
  Scenes = 'SCENES',
  SceneMarkers = 'SCENE_MARKERS',
  Studios = 'STUDIOS',
  Tags = 'TAGS'
}

export type FindFilterType = {
  direction?: InputMaybe<SortDirectionEnum>;
  page?: InputMaybe<Scalars['Int']>;
  /** use per_page = -1 to indicate all results. Defaults to 25. */
  per_page?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type FindGalleriesResultType = {
  __typename?: 'FindGalleriesResultType';
  count: Scalars['Int'];
  galleries: Array<Gallery>;
};

export type FindImagesResultType = {
  __typename?: 'FindImagesResultType';
  count: Scalars['Int'];
  /** Total file size in bytes */
  filesize: Scalars['Float'];
  images: Array<Image>;
  /** Total megapixels of the images */
  megapixels: Scalars['Float'];
};

export type FindJobInput = {
  id: Scalars['ID'];
};

export type FindMoviesResultType = {
  __typename?: 'FindMoviesResultType';
  count: Scalars['Int'];
  movies: Array<Movie>;
};

export type FindPerformersResultType = {
  __typename?: 'FindPerformersResultType';
  count: Scalars['Int'];
  performers: Array<Performer>;
};

export type FindSceneMarkersResultType = {
  __typename?: 'FindSceneMarkersResultType';
  count: Scalars['Int'];
  scene_markers: Array<SceneMarker>;
};

export type FindScenesResultType = {
  __typename?: 'FindScenesResultType';
  count: Scalars['Int'];
  /** Total duration in seconds */
  duration: Scalars['Float'];
  /** Total file size in bytes */
  filesize: Scalars['Float'];
  scenes: Array<Scene>;
};

export type FindStudiosResultType = {
  __typename?: 'FindStudiosResultType';
  count: Scalars['Int'];
  studios: Array<Studio>;
};

export type FindTagsResultType = {
  __typename?: 'FindTagsResultType';
  count: Scalars['Int'];
  tags: Array<Tag>;
};

/** Gallery type */
export type Gallery = {
  __typename?: 'Gallery';
  checksum: Scalars['String'];
  cover?: Maybe<Image>;
  created_at: Scalars['Time'];
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  file_mod_time?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  image_count: Scalars['Int'];
  /** The images in the gallery */
  images: Array<Image>;
  organized: Scalars['Boolean'];
  path?: Maybe<Scalars['String']>;
  performers: Array<Performer>;
  rating?: Maybe<Scalars['Int']>;
  scenes: Array<Scene>;
  studio?: Maybe<Studio>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};

export type GalleryAddInput = {
  gallery_id: Scalars['ID'];
  image_ids: Array<Scalars['ID']>;
};

export type GalleryCreateInput = {
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  rating?: InputMaybe<Scalars['Int']>;
  scene_ids?: InputMaybe<Array<Scalars['ID']>>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type GalleryDestroyInput = {
  /**
   * If true, then the zip file will be deleted if the gallery is zip-file-based.
   * If gallery is folder-based, then any files not associated with other
   * galleries will be deleted, along with the folder, if it is not empty.
   */
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};

export type GalleryFilesType = {
  __typename?: 'GalleryFilesType';
  index: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type GalleryFilterType = {
  AND?: InputMaybe<GalleryFilterType>;
  NOT?: InputMaybe<GalleryFilterType>;
  OR?: InputMaybe<GalleryFilterType>;
  /** Filter by average image resolution */
  average_resolution?: InputMaybe<ResolutionCriterionInput>;
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter by number of images in this gallery */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include galleries missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter to include/exclude galleries that were created from zip */
  is_zip?: InputMaybe<Scalars['Boolean']>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']>;
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>;
  /** Filter galleries by performer age at time of gallery */
  performer_age?: InputMaybe<IntCriterionInput>;
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter galleries that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']>;
  /** Filter to only include galleries with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include galleries with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>;
  /** Filter to only include galleries with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include galleries with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  title?: InputMaybe<StringCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

export type GalleryRemoveInput = {
  gallery_id: Scalars['ID'];
  image_ids: Array<Scalars['ID']>;
};

export type GalleryUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  rating?: InputMaybe<Scalars['Int']>;
  scene_ids?: InputMaybe<Array<Scalars['ID']>>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type GenderCriterionInput = {
  modifier: CriterionModifier;
  value?: InputMaybe<GenderEnum>;
};

export enum GenderEnum {
  Female = 'FEMALE',
  Intersex = 'INTERSEX',
  Male = 'MALE',
  NonBinary = 'NON_BINARY',
  TransgenderFemale = 'TRANSGENDER_FEMALE',
  TransgenderMale = 'TRANSGENDER_MALE'
}

export type GenerateApiKeyInput = {
  clear?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateMetadataInput = {
  /** Generate transcodes even if not required */
  forceTranscodes?: InputMaybe<Scalars['Boolean']>;
  imagePreviews?: InputMaybe<Scalars['Boolean']>;
  interactiveHeatmapsSpeeds?: InputMaybe<Scalars['Boolean']>;
  /** marker ids to generate for */
  markerIDs?: InputMaybe<Array<Scalars['ID']>>;
  markerImagePreviews?: InputMaybe<Scalars['Boolean']>;
  markerScreenshots?: InputMaybe<Scalars['Boolean']>;
  markers?: InputMaybe<Scalars['Boolean']>;
  /** overwrite existing media */
  overwrite?: InputMaybe<Scalars['Boolean']>;
  phashes?: InputMaybe<Scalars['Boolean']>;
  previewOptions?: InputMaybe<GeneratePreviewOptionsInput>;
  previews?: InputMaybe<Scalars['Boolean']>;
  /** scene ids to generate for */
  sceneIDs?: InputMaybe<Array<Scalars['ID']>>;
  sprites?: InputMaybe<Scalars['Boolean']>;
  transcodes?: InputMaybe<Scalars['Boolean']>;
};

export type GenerateMetadataOptions = {
  __typename?: 'GenerateMetadataOptions';
  imagePreviews?: Maybe<Scalars['Boolean']>;
  interactiveHeatmapsSpeeds?: Maybe<Scalars['Boolean']>;
  markerImagePreviews?: Maybe<Scalars['Boolean']>;
  markerScreenshots?: Maybe<Scalars['Boolean']>;
  markers?: Maybe<Scalars['Boolean']>;
  phashes?: Maybe<Scalars['Boolean']>;
  previewOptions?: Maybe<GeneratePreviewOptions>;
  previews?: Maybe<Scalars['Boolean']>;
  sprites?: Maybe<Scalars['Boolean']>;
  transcodes?: Maybe<Scalars['Boolean']>;
};

export type GeneratePreviewOptions = {
  __typename?: 'GeneratePreviewOptions';
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: Maybe<Scalars['String']>;
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: Maybe<Scalars['String']>;
  /** Preset when generating preview */
  previewPreset?: Maybe<PreviewPreset>;
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: Maybe<Scalars['Float']>;
  /** Number of segments in a preview file */
  previewSegments?: Maybe<Scalars['Int']>;
};

export type GeneratePreviewOptionsInput = {
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars['String']>;
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars['String']>;
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>;
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars['Float']>;
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars['Int']>;
};

export enum HashAlgorithm {
  Md5 = 'MD5',
  /** oshash */
  Oshash = 'OSHASH'
}

export type HierarchicalMultiCriterionInput = {
  depth?: InputMaybe<Scalars['Int']>;
  modifier: CriterionModifier;
  value?: InputMaybe<Array<Scalars['ID']>>;
};

export type IdentifyFieldOptions = {
  __typename?: 'IdentifyFieldOptions';
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: Maybe<Scalars['Boolean']>;
  field: Scalars['String'];
  strategy: IdentifyFieldStrategy;
};

export type IdentifyFieldOptionsInput = {
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: InputMaybe<Scalars['Boolean']>;
  field: Scalars['String'];
  strategy: IdentifyFieldStrategy;
};

export enum IdentifyFieldStrategy {
  /** Never sets the field value */
  Ignore = 'IGNORE',
  /**
   * For multi-value fields, merge with existing.
   * For single-value fields, ignore if already set
   */
  Merge = 'MERGE',
  /**
   * Always replaces the value if a value is found.
   * For multi-value fields, any existing values are removed and replaced with the
   * scraped values.
   */
  Overwrite = 'OVERWRITE'
}

export type IdentifyMetadataInput = {
  /** Options defined here override the configured defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>;
  /** paths of scenes to identify - ignored if scene ids are set */
  paths?: InputMaybe<Array<Scalars['String']>>;
  /** scene ids to identify */
  sceneIDs?: InputMaybe<Array<Scalars['ID']>>;
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySourceInput>;
};

export type IdentifyMetadataOptions = {
  __typename?: 'IdentifyMetadataOptions';
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: Maybe<Array<IdentifyFieldOptions>>;
  /** defaults to true if not provided */
  includeMalePerformers?: Maybe<Scalars['Boolean']>;
  /** defaults to true if not provided */
  setCoverImage?: Maybe<Scalars['Boolean']>;
  setOrganized?: Maybe<Scalars['Boolean']>;
};

export type IdentifyMetadataOptionsInput = {
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: InputMaybe<Array<IdentifyFieldOptionsInput>>;
  /** defaults to true if not provided */
  includeMalePerformers?: InputMaybe<Scalars['Boolean']>;
  /** defaults to true if not provided */
  setCoverImage?: InputMaybe<Scalars['Boolean']>;
  setOrganized?: InputMaybe<Scalars['Boolean']>;
};

export type IdentifyMetadataTaskOptions = {
  __typename?: 'IdentifyMetadataTaskOptions';
  /** Options defined here override the configured defaults */
  options?: Maybe<IdentifyMetadataOptions>;
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySource>;
};

export type IdentifySource = {
  __typename?: 'IdentifySource';
  /** Options defined for a source override the defaults */
  options?: Maybe<IdentifyMetadataOptions>;
  source: ScraperSource;
};

export type IdentifySourceInput = {
  /** Options defined for a source override the defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>;
  source: ScraperSourceInput;
};

export type Image = {
  __typename?: 'Image';
  checksum?: Maybe<Scalars['String']>;
  created_at: Scalars['Time'];
  file: ImageFileType;
  file_mod_time?: Maybe<Scalars['Time']>;
  galleries: Array<Gallery>;
  id: Scalars['ID'];
  o_counter?: Maybe<Scalars['Int']>;
  organized: Scalars['Boolean'];
  path: Scalars['String'];
  paths: ImagePathsType;
  performers: Array<Performer>;
  rating?: Maybe<Scalars['Int']>;
  studio?: Maybe<Studio>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
};

export type ImageDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type ImageFileType = {
  __typename?: 'ImageFileType';
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageFilterType = {
  AND?: InputMaybe<ImageFilterType>;
  NOT?: InputMaybe<ImageFilterType>;
  OR?: InputMaybe<ImageFilterType>;
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>;
  /** Filter to only include images with these galleries */
  galleries?: InputMaybe<MultiCriterionInput>;
  /** Filter to only include images missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']>;
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>;
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter images that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']>;
  /** Filter to only include images with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include images with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>;
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>;
  /** Filter to only include images with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include images with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  title?: InputMaybe<StringCriterionInput>;
};

export enum ImageLightboxDisplayMode {
  FitX = 'FIT_X',
  FitXy = 'FIT_XY',
  Original = 'ORIGINAL'
}

export enum ImageLightboxScrollMode {
  PanY = 'PAN_Y',
  Zoom = 'ZOOM'
}

export type ImagePathsType = {
  __typename?: 'ImagePathsType';
  image?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type ImageUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  gallery_ids?: InputMaybe<Array<Scalars['ID']>>;
  id: Scalars['ID'];
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  rating?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ImagesDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};

export enum ImportDuplicateEnum {
  Fail = 'FAIL',
  Ignore = 'IGNORE',
  Overwrite = 'OVERWRITE'
}

export enum ImportMissingRefEnum {
  Create = 'CREATE',
  Fail = 'FAIL',
  Ignore = 'IGNORE'
}

export type ImportObjectsInput = {
  duplicateBehaviour: ImportDuplicateEnum;
  file: Scalars['Upload'];
  missingRefBehaviour: ImportMissingRefEnum;
};

export type IntCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['Int'];
  value2?: InputMaybe<Scalars['Int']>;
};

export type Job = {
  __typename?: 'Job';
  addTime: Scalars['Time'];
  description: Scalars['String'];
  endTime?: Maybe<Scalars['Time']>;
  id: Scalars['ID'];
  progress?: Maybe<Scalars['Float']>;
  startTime?: Maybe<Scalars['Time']>;
  status: JobStatus;
  subTasks?: Maybe<Array<Scalars['String']>>;
};

export enum JobStatus {
  Cancelled = 'CANCELLED',
  Finished = 'FINISHED',
  Ready = 'READY',
  Running = 'RUNNING',
  Stopping = 'STOPPING'
}

export type JobStatusUpdate = {
  __typename?: 'JobStatusUpdate';
  job: Job;
  type: JobStatusUpdateType;
};

export enum JobStatusUpdateType {
  Add = 'ADD',
  Remove = 'REMOVE',
  Update = 'UPDATE'
}

export type LogEntry = {
  __typename?: 'LogEntry';
  level: LogLevel;
  message: Scalars['String'];
  time: Scalars['Time'];
};

export enum LogLevel {
  Debug = 'Debug',
  Error = 'Error',
  Info = 'Info',
  Progress = 'Progress',
  Trace = 'Trace',
  Warning = 'Warning'
}

export type MarkerStringsResultType = {
  __typename?: 'MarkerStringsResultType';
  count: Scalars['Int'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type MigrateInput = {
  backupPath: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  aliases?: Maybe<Scalars['String']>;
  back_image_path?: Maybe<Scalars['String']>;
  checksum: Scalars['String'];
  created_at: Scalars['Time'];
  date?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  /** Duration in seconds */
  duration?: Maybe<Scalars['Int']>;
  front_image_path?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  rating?: Maybe<Scalars['Int']>;
  scene_count?: Maybe<Scalars['Int']>;
  scenes: Array<Scene>;
  studio?: Maybe<Studio>;
  synopsis?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};

export type MovieCreateInput = {
  aliases?: InputMaybe<Scalars['String']>;
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  /** Duration in seconds */
  duration?: InputMaybe<Scalars['Int']>;
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rating?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  synopsis?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MovieDestroyInput = {
  id: Scalars['ID'];
};

export type MovieFilterType = {
  director?: InputMaybe<StringCriterionInput>;
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>;
  /** Filter to only include movies missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter to only include movies where performer appears in a scene */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>;
  /** Filter to only include movies with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  synopsis?: InputMaybe<StringCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

export type MovieUpdateInput = {
  aliases?: InputMaybe<Scalars['String']>;
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  synopsis?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MultiCriterionInput = {
  modifier: CriterionModifier;
  value?: InputMaybe<Array<Scalars['ID']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addGalleryImages: Scalars['Boolean'];
  /** Enables an IP address for DLNA for an optional duration */
  addTempDLNAIP: Scalars['Boolean'];
  /** Backup the database. Optionally returns a link to download the database file */
  backupDatabase?: Maybe<Scalars['String']>;
  bulkGalleryUpdate?: Maybe<Array<Gallery>>;
  bulkImageUpdate?: Maybe<Array<Image>>;
  bulkMovieUpdate?: Maybe<Array<Movie>>;
  bulkPerformerUpdate?: Maybe<Array<Performer>>;
  bulkSceneUpdate?: Maybe<Array<Scene>>;
  configureDLNA: ConfigDlnaResult;
  configureDefaults: ConfigDefaultSettingsResult;
  /** Change general configuration options */
  configureGeneral: ConfigGeneralResult;
  configureInterface: ConfigInterfaceResult;
  configureScraping: ConfigScrapingResult;
  destroySavedFilter: Scalars['Boolean'];
  /** Disables DLNA for an optional duration. Has no effect if DLNA is disabled by default */
  disableDLNA: Scalars['Boolean'];
  /** Enables DLNA for an optional duration. Has no effect if DLNA is enabled by default */
  enableDLNA: Scalars['Boolean'];
  /** Returns a link to download the result */
  exportObjects?: Maybe<Scalars['String']>;
  galleriesUpdate?: Maybe<Array<Maybe<Gallery>>>;
  galleryCreate?: Maybe<Gallery>;
  galleryDestroy: Scalars['Boolean'];
  galleryUpdate?: Maybe<Gallery>;
  /** Generate and set (or clear) API key */
  generateAPIKey: Scalars['String'];
  /** Decrements the o-counter for an image. Returns the new value */
  imageDecrementO: Scalars['Int'];
  imageDestroy: Scalars['Boolean'];
  /** Increments the o-counter for an image. Returns the new value */
  imageIncrementO: Scalars['Int'];
  /** Resets the o-counter for a image to 0. Returns the new value */
  imageResetO: Scalars['Int'];
  imageUpdate?: Maybe<Image>;
  imagesDestroy: Scalars['Boolean'];
  imagesUpdate?: Maybe<Array<Maybe<Image>>>;
  /** Performs an incremental import. Returns the job ID */
  importObjects: Scalars['ID'];
  /** Start auto-tagging. Returns the job ID */
  metadataAutoTag: Scalars['ID'];
  /** Clean metadata. Returns the job ID */
  metadataClean: Scalars['ID'];
  /** Start a full export. Outputs to the metadata directory. Returns the job ID */
  metadataExport: Scalars['ID'];
  /** Start generating content. Returns the job ID */
  metadataGenerate: Scalars['ID'];
  /** Identifies scenes using scrapers. Returns the job ID */
  metadataIdentify: Scalars['ID'];
  /** Start an full import. Completely wipes the database and imports from the metadata directory. Returns the job ID */
  metadataImport: Scalars['ID'];
  /** Start a scan. Returns the job ID */
  metadataScan: Scalars['ID'];
  migrate: Scalars['Boolean'];
  /** Migrate generated files for the current hash naming */
  migrateHashNaming: Scalars['ID'];
  movieCreate?: Maybe<Movie>;
  movieDestroy: Scalars['Boolean'];
  movieUpdate?: Maybe<Movie>;
  moviesDestroy: Scalars['Boolean'];
  performerCreate?: Maybe<Performer>;
  performerDestroy: Scalars['Boolean'];
  performerUpdate?: Maybe<Performer>;
  performersDestroy: Scalars['Boolean'];
  reloadPlugins: Scalars['Boolean'];
  /** Reload scrapers */
  reloadScrapers: Scalars['Boolean'];
  removeGalleryImages: Scalars['Boolean'];
  /** Removes an IP address from the temporary DLNA whitelist */
  removeTempDLNAIP: Scalars['Boolean'];
  /** Run plugin task. Returns the job ID */
  runPluginTask: Scalars['ID'];
  saveFilter: SavedFilter;
  /** Decrements the o-counter for a scene. Returns the new value */
  sceneDecrementO: Scalars['Int'];
  sceneDestroy: Scalars['Boolean'];
  /** Generates screenshot at specified time in seconds. Leave empty to generate default screenshot */
  sceneGenerateScreenshot: Scalars['String'];
  /** Increments the o-counter for a scene. Returns the new value */
  sceneIncrementO: Scalars['Int'];
  sceneMarkerCreate?: Maybe<SceneMarker>;
  sceneMarkerDestroy: Scalars['Boolean'];
  sceneMarkerUpdate?: Maybe<SceneMarker>;
  /** Resets the o-counter for a scene to 0. Returns the new value */
  sceneResetO: Scalars['Int'];
  sceneUpdate?: Maybe<Scene>;
  scenesDestroy: Scalars['Boolean'];
  scenesUpdate?: Maybe<Array<Maybe<Scene>>>;
  setDefaultFilter: Scalars['Boolean'];
  setup: Scalars['Boolean'];
  /** Run batch performer tag task. Returns the job ID. */
  stashBoxBatchPerformerTag: Scalars['String'];
  stopAllJobs: Scalars['Boolean'];
  stopJob: Scalars['Boolean'];
  studioCreate?: Maybe<Studio>;
  studioDestroy: Scalars['Boolean'];
  studioUpdate?: Maybe<Studio>;
  studiosDestroy: Scalars['Boolean'];
  /** Submit fingerprints to stash-box instance */
  submitStashBoxFingerprints: Scalars['Boolean'];
  /** Submit performer as draft to stash-box instance */
  submitStashBoxPerformerDraft?: Maybe<Scalars['ID']>;
  /** Submit scene as draft to stash-box instance */
  submitStashBoxSceneDraft?: Maybe<Scalars['ID']>;
  tagCreate?: Maybe<Tag>;
  tagDestroy: Scalars['Boolean'];
  tagUpdate?: Maybe<Tag>;
  tagsDestroy: Scalars['Boolean'];
  tagsMerge?: Maybe<Tag>;
};


export type MutationAddGalleryImagesArgs = {
  input: GalleryAddInput;
};


export type MutationAddTempDlnaipArgs = {
  input: AddTempDlnaipInput;
};


export type MutationBackupDatabaseArgs = {
  input: BackupDatabaseInput;
};


export type MutationBulkGalleryUpdateArgs = {
  input: BulkGalleryUpdateInput;
};


export type MutationBulkImageUpdateArgs = {
  input: BulkImageUpdateInput;
};


export type MutationBulkMovieUpdateArgs = {
  input: BulkMovieUpdateInput;
};


export type MutationBulkPerformerUpdateArgs = {
  input: BulkPerformerUpdateInput;
};


export type MutationBulkSceneUpdateArgs = {
  input: BulkSceneUpdateInput;
};


export type MutationConfigureDlnaArgs = {
  input: ConfigDlnaInput;
};


export type MutationConfigureDefaultsArgs = {
  input: ConfigDefaultSettingsInput;
};


export type MutationConfigureGeneralArgs = {
  input: ConfigGeneralInput;
};


export type MutationConfigureInterfaceArgs = {
  input: ConfigInterfaceInput;
};


export type MutationConfigureScrapingArgs = {
  input: ConfigScrapingInput;
};


export type MutationDestroySavedFilterArgs = {
  input: DestroyFilterInput;
};


export type MutationDisableDlnaArgs = {
  input: DisableDlnaInput;
};


export type MutationEnableDlnaArgs = {
  input: EnableDlnaInput;
};


export type MutationExportObjectsArgs = {
  input: ExportObjectsInput;
};


export type MutationGalleriesUpdateArgs = {
  input: Array<GalleryUpdateInput>;
};


export type MutationGalleryCreateArgs = {
  input: GalleryCreateInput;
};


export type MutationGalleryDestroyArgs = {
  input: GalleryDestroyInput;
};


export type MutationGalleryUpdateArgs = {
  input: GalleryUpdateInput;
};


export type MutationGenerateApiKeyArgs = {
  input: GenerateApiKeyInput;
};


export type MutationImageDecrementOArgs = {
  id: Scalars['ID'];
};


export type MutationImageDestroyArgs = {
  input: ImageDestroyInput;
};


export type MutationImageIncrementOArgs = {
  id: Scalars['ID'];
};


export type MutationImageResetOArgs = {
  id: Scalars['ID'];
};


export type MutationImageUpdateArgs = {
  input: ImageUpdateInput;
};


export type MutationImagesDestroyArgs = {
  input: ImagesDestroyInput;
};


export type MutationImagesUpdateArgs = {
  input: Array<ImageUpdateInput>;
};


export type MutationImportObjectsArgs = {
  input: ImportObjectsInput;
};


export type MutationMetadataAutoTagArgs = {
  input: AutoTagMetadataInput;
};


export type MutationMetadataCleanArgs = {
  input: CleanMetadataInput;
};


export type MutationMetadataGenerateArgs = {
  input: GenerateMetadataInput;
};


export type MutationMetadataIdentifyArgs = {
  input: IdentifyMetadataInput;
};


export type MutationMetadataScanArgs = {
  input: ScanMetadataInput;
};


export type MutationMigrateArgs = {
  input: MigrateInput;
};


export type MutationMovieCreateArgs = {
  input: MovieCreateInput;
};


export type MutationMovieDestroyArgs = {
  input: MovieDestroyInput;
};


export type MutationMovieUpdateArgs = {
  input: MovieUpdateInput;
};


export type MutationMoviesDestroyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationPerformerCreateArgs = {
  input: PerformerCreateInput;
};


export type MutationPerformerDestroyArgs = {
  input: PerformerDestroyInput;
};


export type MutationPerformerUpdateArgs = {
  input: PerformerUpdateInput;
};


export type MutationPerformersDestroyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationRemoveGalleryImagesArgs = {
  input: GalleryRemoveInput;
};


export type MutationRemoveTempDlnaipArgs = {
  input: RemoveTempDlnaipInput;
};


export type MutationRunPluginTaskArgs = {
  args?: InputMaybe<Array<PluginArgInput>>;
  plugin_id: Scalars['ID'];
  task_name: Scalars['String'];
};


export type MutationSaveFilterArgs = {
  input: SaveFilterInput;
};


export type MutationSceneDecrementOArgs = {
  id: Scalars['ID'];
};


export type MutationSceneDestroyArgs = {
  input: SceneDestroyInput;
};


export type MutationSceneGenerateScreenshotArgs = {
  at?: InputMaybe<Scalars['Float']>;
  id: Scalars['ID'];
};


export type MutationSceneIncrementOArgs = {
  id: Scalars['ID'];
};


export type MutationSceneMarkerCreateArgs = {
  input: SceneMarkerCreateInput;
};


export type MutationSceneMarkerDestroyArgs = {
  id: Scalars['ID'];
};


export type MutationSceneMarkerUpdateArgs = {
  input: SceneMarkerUpdateInput;
};


export type MutationSceneResetOArgs = {
  id: Scalars['ID'];
};


export type MutationSceneUpdateArgs = {
  input: SceneUpdateInput;
};


export type MutationScenesDestroyArgs = {
  input: ScenesDestroyInput;
};


export type MutationScenesUpdateArgs = {
  input: Array<SceneUpdateInput>;
};


export type MutationSetDefaultFilterArgs = {
  input: SetDefaultFilterInput;
};


export type MutationSetupArgs = {
  input: SetupInput;
};


export type MutationStashBoxBatchPerformerTagArgs = {
  input: StashBoxBatchPerformerTagInput;
};


export type MutationStopJobArgs = {
  job_id: Scalars['ID'];
};


export type MutationStudioCreateArgs = {
  input: StudioCreateInput;
};


export type MutationStudioDestroyArgs = {
  input: StudioDestroyInput;
};


export type MutationStudioUpdateArgs = {
  input: StudioUpdateInput;
};


export type MutationStudiosDestroyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationSubmitStashBoxFingerprintsArgs = {
  input: StashBoxFingerprintSubmissionInput;
};


export type MutationSubmitStashBoxPerformerDraftArgs = {
  input: StashBoxDraftSubmissionInput;
};


export type MutationSubmitStashBoxSceneDraftArgs = {
  input: StashBoxDraftSubmissionInput;
};


export type MutationTagCreateArgs = {
  input: TagCreateInput;
};


export type MutationTagDestroyArgs = {
  input: TagDestroyInput;
};


export type MutationTagUpdateArgs = {
  input: TagUpdateInput;
};


export type MutationTagsDestroyArgs = {
  ids: Array<Scalars['ID']>;
};


export type MutationTagsMergeArgs = {
  input: TagsMergeInput;
};

export type PHashDuplicationCriterionInput = {
  /** Currently unimplemented */
  distance?: InputMaybe<Scalars['Int']>;
  duplicated?: InputMaybe<Scalars['Boolean']>;
};

export type Performer = {
  __typename?: 'Performer';
  aliases?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  career_length?: Maybe<Scalars['String']>;
  checksum: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['Time'];
  death_date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Scalars['String']>;
  eye_color?: Maybe<Scalars['String']>;
  fake_tits?: Maybe<Scalars['String']>;
  favorite: Scalars['Boolean'];
  gallery_count?: Maybe<Scalars['Int']>;
  gender?: Maybe<GenderEnum>;
  hair_color?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ignore_auto_tag: Scalars['Boolean'];
  image_count?: Maybe<Scalars['Int']>;
  image_path?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  measurements?: Maybe<Scalars['String']>;
  movie_count?: Maybe<Scalars['Int']>;
  movies: Array<Movie>;
  name?: Maybe<Scalars['String']>;
  piercings?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  scene_count?: Maybe<Scalars['Int']>;
  scenes: Array<Scene>;
  stash_ids: Array<StashId>;
  tags: Array<Tag>;
  tattoos?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type PerformerCreateInput = {
  aliases?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['String']>;
  career_length?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  death_date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  eye_color?: InputMaybe<Scalars['String']>;
  fake_tits?: InputMaybe<Scalars['String']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<GenderEnum>;
  hair_color?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  measurements?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  piercings?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  tattoos?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type PerformerDestroyInput = {
  id: Scalars['ID'];
};

export type PerformerFilterType = {
  AND?: InputMaybe<PerformerFilterType>;
  NOT?: InputMaybe<PerformerFilterType>;
  OR?: InputMaybe<PerformerFilterType>;
  /** Filter by age */
  age?: InputMaybe<IntCriterionInput>;
  /** Filter by aliases */
  aliases?: InputMaybe<StringCriterionInput>;
  /** Filter by birth year */
  birth_year?: InputMaybe<IntCriterionInput>;
  /** Filter by career length */
  career_length?: InputMaybe<StringCriterionInput>;
  /** Filter by country */
  country?: InputMaybe<StringCriterionInput>;
  /** Filter by death year */
  death_year?: InputMaybe<IntCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter by ethnicity */
  ethnicity?: InputMaybe<StringCriterionInput>;
  /** Filter by eye color */
  eye_color?: InputMaybe<StringCriterionInput>;
  /** Filter by fake tits value */
  fake_tits?: InputMaybe<StringCriterionInput>;
  /** Filter by favorite */
  filter_favorites?: InputMaybe<Scalars['Boolean']>;
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by gender */
  gender?: InputMaybe<GenderCriterionInput>;
  /** Filter by hair color */
  hair_color?: InputMaybe<StringCriterionInput>;
  /** Filter by height */
  height?: InputMaybe<StringCriterionInput>;
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include performers missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter by measurements */
  measurements?: InputMaybe<StringCriterionInput>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter by piercings */
  piercings?: InputMaybe<StringCriterionInput>;
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>;
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by StashID */
  stash_id?: InputMaybe<StringCriterionInput>;
  /** Filter by studios where performer appears in scene/image/gallery */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include performers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tattoos */
  tattoos?: InputMaybe<StringCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
  /** Filter by weight */
  weight?: InputMaybe<IntCriterionInput>;
};

export type PerformerUpdateInput = {
  aliases?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['String']>;
  career_length?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  death_date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  eye_color?: InputMaybe<Scalars['String']>;
  fake_tits?: InputMaybe<Scalars['String']>;
  favorite?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<GenderEnum>;
  hair_color?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  measurements?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  piercings?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  tattoos?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type Plugin = {
  __typename?: 'Plugin';
  description?: Maybe<Scalars['String']>;
  hooks?: Maybe<Array<PluginHook>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  tasks?: Maybe<Array<PluginTask>>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type PluginArgInput = {
  key: Scalars['String'];
  value?: InputMaybe<PluginValueInput>;
};

export type PluginHook = {
  __typename?: 'PluginHook';
  description?: Maybe<Scalars['String']>;
  hooks?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  plugin: Plugin;
};

export type PluginResult = {
  __typename?: 'PluginResult';
  error?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
};

export type PluginTask = {
  __typename?: 'PluginTask';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  plugin: Plugin;
};

export type PluginValueInput = {
  a?: InputMaybe<Array<PluginValueInput>>;
  b?: InputMaybe<Scalars['Boolean']>;
  f?: InputMaybe<Scalars['Float']>;
  i?: InputMaybe<Scalars['Int']>;
  o?: InputMaybe<Array<PluginArgInput>>;
  str?: InputMaybe<Scalars['String']>;
};

export enum PreviewPreset {
  /** X264_FAST */
  Fast = 'fast',
  /** X264_MEDIUM */
  Medium = 'medium',
  /** X264_SLOW */
  Slow = 'slow',
  /** X264_SLOWER */
  Slower = 'slower',
  /** X264_ULTRAFAST */
  Ultrafast = 'ultrafast',
  /** X264_VERYFAST */
  Veryfast = 'veryfast',
  /** X264_VERYSLOW */
  Veryslow = 'veryslow'
}

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  allMovies: Array<Movie>;
  allPerformers: Array<Performer>;
  allStudios: Array<Studio>;
  allTags: Array<Tag>;
  /** Returns the current, complete configuration */
  configuration: ConfigResult;
  /** Returns an array of paths for the given path */
  directory: Directory;
  dlnaStatus: DlnaStatus;
  findDefaultFilter?: Maybe<SavedFilter>;
  /**  Returns any groups of scenes that are perceptual duplicates within the queried distance  */
  findDuplicateScenes: Array<Array<Scene>>;
  findGalleries: FindGalleriesResultType;
  findGallery?: Maybe<Gallery>;
  findImage?: Maybe<Image>;
  /** A function which queries Scene objects */
  findImages: FindImagesResultType;
  findJob?: Maybe<Job>;
  /** Find a movie by ID */
  findMovie?: Maybe<Movie>;
  /** A function which queries Movie objects */
  findMovies: FindMoviesResultType;
  /** Find a performer by ID */
  findPerformer?: Maybe<Performer>;
  /** A function which queries Performer objects */
  findPerformers: FindPerformersResultType;
  findSavedFilters: Array<SavedFilter>;
  /** Find a scene by ID or Checksum */
  findScene?: Maybe<Scene>;
  findSceneByHash?: Maybe<Scene>;
  /** A function which queries SceneMarker objects */
  findSceneMarkers: FindSceneMarkersResultType;
  /** A function which queries Scene objects */
  findScenes: FindScenesResultType;
  findScenesByPathRegex: FindScenesResultType;
  /** Find a studio by ID */
  findStudio?: Maybe<Studio>;
  /** A function which queries Studio objects */
  findStudios: FindStudiosResultType;
  findTag?: Maybe<Tag>;
  findTags: FindTagsResultType;
  jobQueue?: Maybe<Array<Job>>;
  latestversion: ShortVersion;
  /** @deprecated Use listScrapers(types: [GALLERY]) */
  listGalleryScrapers: Array<Scraper>;
  /** @deprecated Use listScrapers(types: [MOVIE]) */
  listMovieScrapers: Array<Scraper>;
  /** @deprecated Use listScrapers(types: [PERFORMER]) */
  listPerformerScrapers: Array<Scraper>;
  /** @deprecated Use listScrapers(types: [SCENE]) */
  listSceneScrapers: Array<Scraper>;
  /** List available scrapers */
  listScrapers: Array<Scraper>;
  logs: Array<LogEntry>;
  /** Get marker strings */
  markerStrings: Array<Maybe<MarkerStringsResultType>>;
  /** Retrieve random scene markers for the wall */
  markerWall: Array<SceneMarker>;
  parseSceneFilenames: SceneParserResultType;
  /** List available plugin operations */
  pluginTasks?: Maybe<Array<PluginTask>>;
  /** List loaded plugins */
  plugins?: Maybe<Array<Plugin>>;
  /**
   * Query StashBox for performers
   * @deprecated use scrapeSinglePerformer or scrapeMultiPerformers
   */
  queryStashBoxPerformer: Array<StashBoxPerformerQueryResult>;
  /**
   * Query StashBox for scenes
   * @deprecated use scrapeSingleScene or scrapeMultiScenes
   */
  queryStashBoxScene: Array<ScrapedScene>;
  /** Organize scene markers by tag for a given scene ID */
  sceneMarkerTags: Array<SceneMarkerTag>;
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>;
  /** Retrieve random scenes for the wall */
  sceneWall: Array<Scene>;
  /**
   * Scrape a list of performers from a query
   * @deprecated use scrapeSinglePerformer with scraper_id = builtin_freeones
   */
  scrapeFreeonesPerformerList: Array<Scalars['String']>;
  /**
   * Scrapes a complete gallery record based on an existing gallery
   * @deprecated use scrapeSingleGallery
   */
  scrapeGallery?: Maybe<ScrapedGallery>;
  /** Scrapes a complete gallery record based on a URL */
  scrapeGalleryURL?: Maybe<ScrapedGallery>;
  /** Scrapes a complete movie record based on a URL */
  scrapeMovieURL?: Maybe<ScrapedMovie>;
  /** Scrape for multiple performers */
  scrapeMultiPerformers: Array<Array<ScrapedPerformer>>;
  /** Scrape for multiple scenes */
  scrapeMultiScenes: Array<Array<ScrapedScene>>;
  /**
   * Scrapes a complete performer record based on a scrapePerformerList result
   * @deprecated use scrapeSinglePerformer
   */
  scrapePerformer?: Maybe<ScrapedPerformer>;
  /**
   * Scrape a list of performers based on name
   * @deprecated use scrapeSinglePerformer
   */
  scrapePerformerList: Array<ScrapedPerformer>;
  /** Scrapes a complete performer record based on a URL */
  scrapePerformerURL?: Maybe<ScrapedPerformer>;
  /**
   * Scrapes a complete scene record based on an existing scene
   * @deprecated use scrapeSingleScene
   */
  scrapeScene?: Maybe<ScrapedScene>;
  /** Scrapes a complete performer record based on a URL */
  scrapeSceneURL?: Maybe<ScrapedScene>;
  /** Scrape for a single gallery */
  scrapeSingleGallery: Array<ScrapedGallery>;
  /** Scrape for a single movie */
  scrapeSingleMovie: Array<ScrapedMovie>;
  /** Scrape for a single performer */
  scrapeSinglePerformer: Array<ScrapedPerformer>;
  /** Scrape for a single scene */
  scrapeSingleScene: Array<ScrapedScene>;
  /** Scrapes content based on a URL */
  scrapeURL?: Maybe<ScrapedContent>;
  /** Get stats */
  stats: StatsResultType;
  systemStatus: SystemStatus;
  validateStashBoxCredentials: StashBoxValidationResult;
  version: Version;
};


/** The query root for this schema */
export type QueryDirectoryArgs = {
  locale?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
};


/** The query root for this schema */
export type QueryFindDefaultFilterArgs = {
  mode: FilterMode;
};


/** The query root for this schema */
export type QueryFindDuplicateScenesArgs = {
  distance?: InputMaybe<Scalars['Int']>;
};


/** The query root for this schema */
export type QueryFindGalleriesArgs = {
  filter?: InputMaybe<FindFilterType>;
  gallery_filter?: InputMaybe<GalleryFilterType>;
};


/** The query root for this schema */
export type QueryFindGalleryArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindImageArgs = {
  checksum?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The query root for this schema */
export type QueryFindImagesArgs = {
  filter?: InputMaybe<FindFilterType>;
  image_filter?: InputMaybe<ImageFilterType>;
  image_ids?: InputMaybe<Array<Scalars['Int']>>;
};


/** The query root for this schema */
export type QueryFindJobArgs = {
  input: FindJobInput;
};


/** The query root for this schema */
export type QueryFindMovieArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindMoviesArgs = {
  filter?: InputMaybe<FindFilterType>;
  movie_filter?: InputMaybe<MovieFilterType>;
};


/** The query root for this schema */
export type QueryFindPerformerArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindPerformersArgs = {
  filter?: InputMaybe<FindFilterType>;
  performer_filter?: InputMaybe<PerformerFilterType>;
};


/** The query root for this schema */
export type QueryFindSavedFiltersArgs = {
  mode: FilterMode;
};


/** The query root for this schema */
export type QueryFindSceneArgs = {
  checksum?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The query root for this schema */
export type QueryFindSceneByHashArgs = {
  input: SceneHashInput;
};


/** The query root for this schema */
export type QueryFindSceneMarkersArgs = {
  filter?: InputMaybe<FindFilterType>;
  scene_marker_filter?: InputMaybe<SceneMarkerFilterType>;
};


/** The query root for this schema */
export type QueryFindScenesArgs = {
  filter?: InputMaybe<FindFilterType>;
  scene_filter?: InputMaybe<SceneFilterType>;
  scene_ids?: InputMaybe<Array<Scalars['Int']>>;
};


/** The query root for this schema */
export type QueryFindScenesByPathRegexArgs = {
  filter?: InputMaybe<FindFilterType>;
};


/** The query root for this schema */
export type QueryFindStudioArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindStudiosArgs = {
  filter?: InputMaybe<FindFilterType>;
  studio_filter?: InputMaybe<StudioFilterType>;
};


/** The query root for this schema */
export type QueryFindTagArgs = {
  id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryFindTagsArgs = {
  filter?: InputMaybe<FindFilterType>;
  tag_filter?: InputMaybe<TagFilterType>;
};


/** The query root for this schema */
export type QueryListScrapersArgs = {
  types: Array<ScrapeContentType>;
};


/** The query root for this schema */
export type QueryMarkerStringsArgs = {
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};


/** The query root for this schema */
export type QueryMarkerWallArgs = {
  q?: InputMaybe<Scalars['String']>;
};


/** The query root for this schema */
export type QueryParseSceneFilenamesArgs = {
  config: SceneParserInput;
  filter?: InputMaybe<FindFilterType>;
};


/** The query root for this schema */
export type QueryQueryStashBoxPerformerArgs = {
  input: StashBoxPerformerQueryInput;
};


/** The query root for this schema */
export type QueryQueryStashBoxSceneArgs = {
  input: StashBoxSceneQueryInput;
};


/** The query root for this schema */
export type QuerySceneMarkerTagsArgs = {
  scene_id: Scalars['ID'];
};


/** The query root for this schema */
export type QuerySceneStreamsArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** The query root for this schema */
export type QuerySceneWallArgs = {
  q?: InputMaybe<Scalars['String']>;
};


/** The query root for this schema */
export type QueryScrapeFreeonesPerformerListArgs = {
  query: Scalars['String'];
};


/** The query root for this schema */
export type QueryScrapeGalleryArgs = {
  gallery: GalleryUpdateInput;
  scraper_id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryScrapeGalleryUrlArgs = {
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryScrapeMovieUrlArgs = {
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryScrapeMultiPerformersArgs = {
  input: ScrapeMultiPerformersInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeMultiScenesArgs = {
  input: ScrapeMultiScenesInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapePerformerArgs = {
  scraped_performer: ScrapedPerformerInput;
  scraper_id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryScrapePerformerListArgs = {
  query: Scalars['String'];
  scraper_id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryScrapePerformerUrlArgs = {
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryScrapeSceneArgs = {
  scene: SceneUpdateInput;
  scraper_id: Scalars['ID'];
};


/** The query root for this schema */
export type QueryScrapeSceneUrlArgs = {
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryScrapeSingleGalleryArgs = {
  input: ScrapeSingleGalleryInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeSingleMovieArgs = {
  input: ScrapeSingleMovieInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeSinglePerformerArgs = {
  input: ScrapeSinglePerformerInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeSingleSceneArgs = {
  input: ScrapeSingleSceneInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
export type QueryScrapeUrlArgs = {
  ty: ScrapeContentType;
  url: Scalars['String'];
};


/** The query root for this schema */
export type QueryValidateStashBoxCredentialsArgs = {
  input: StashBoxInput;
};

export type RemoveTempDlnaipInput = {
  address: Scalars['String'];
};

export type ResolutionCriterionInput = {
  modifier: CriterionModifier;
  value: ResolutionEnum;
};

export enum ResolutionEnum {
  /** 8k */
  EightK = 'EIGHT_K',
  /** 5k */
  FiveK = 'FIVE_K',
  /** 4k */
  FourK = 'FOUR_K',
  /** 1080p */
  FullHd = 'FULL_HD',
  /** 240p */
  Low = 'LOW',
  /** 1440p */
  QuadHd = 'QUAD_HD',
  /** 360p */
  R360P = 'R360P',
  /** 6k */
  SixK = 'SIX_K',
  /** 480p */
  Standard = 'STANDARD',
  /** 720p */
  StandardHd = 'STANDARD_HD',
  /** 144p */
  VeryLow = 'VERY_LOW',
  /** 1920p */
  VrHd = 'VR_HD',
  /** 540p */
  WebHd = 'WEB_HD'
}

export type SaveFilterInput = {
  /** JSON-encoded filter string */
  filter: Scalars['String'];
  /** provide ID to overwrite existing filter */
  id?: InputMaybe<Scalars['ID']>;
  mode: FilterMode;
  name: Scalars['String'];
};

export type SavedFilter = {
  __typename?: 'SavedFilter';
  /** JSON-encoded filter string */
  filter: Scalars['String'];
  id: Scalars['ID'];
  mode: FilterMode;
  name: Scalars['String'];
};

/** Filter options for meta data scannning */
export type ScanMetaDataFilterInput = {
  /** If set, files with a modification time before this time point are ignored by the scan */
  minModTime?: InputMaybe<Scalars['Timestamp']>;
};

export type ScanMetadataInput = {
  /** Filter options for the scan */
  filter?: InputMaybe<ScanMetaDataFilterInput>;
  paths?: InputMaybe<Array<Scalars['String']>>;
  /** Generate image previews during scan */
  scanGenerateImagePreviews?: InputMaybe<Scalars['Boolean']>;
  /** Generate phashes during scan */
  scanGeneratePhashes?: InputMaybe<Scalars['Boolean']>;
  /** Generate previews during scan */
  scanGeneratePreviews?: InputMaybe<Scalars['Boolean']>;
  /** Generate sprites during scan */
  scanGenerateSprites?: InputMaybe<Scalars['Boolean']>;
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails?: InputMaybe<Scalars['Boolean']>;
  /** Strip file extension from title */
  stripFileExtension?: InputMaybe<Scalars['Boolean']>;
  /** Set name, date, details from metadata (if present) */
  useFileMetadata?: InputMaybe<Scalars['Boolean']>;
};

export type ScanMetadataOptions = {
  __typename?: 'ScanMetadataOptions';
  /** Generate image previews during scan */
  scanGenerateImagePreviews: Scalars['Boolean'];
  /** Generate phashes during scan */
  scanGeneratePhashes: Scalars['Boolean'];
  /** Generate previews during scan */
  scanGeneratePreviews: Scalars['Boolean'];
  /** Generate sprites during scan */
  scanGenerateSprites: Scalars['Boolean'];
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails: Scalars['Boolean'];
  /** Strip file extension from title */
  stripFileExtension: Scalars['Boolean'];
  /** Set name, date, details from metadata (if present) */
  useFileMetadata: Scalars['Boolean'];
};

export type Scene = {
  __typename?: 'Scene';
  checksum?: Maybe<Scalars['String']>;
  created_at: Scalars['Time'];
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  file: SceneFileType;
  file_mod_time?: Maybe<Scalars['Time']>;
  galleries: Array<Gallery>;
  id: Scalars['ID'];
  interactive: Scalars['Boolean'];
  interactive_speed?: Maybe<Scalars['Int']>;
  movies: Array<SceneMovie>;
  o_counter?: Maybe<Scalars['Int']>;
  organized: Scalars['Boolean'];
  oshash?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  paths: ScenePathsType;
  performers: Array<Performer>;
  phash?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>;
  scene_markers: Array<SceneMarker>;
  stash_ids: Array<StashId>;
  studio?: Maybe<Studio>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};

export type SceneDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type SceneFileType = {
  __typename?: 'SceneFileType';
  audio_codec?: Maybe<Scalars['String']>;
  bitrate?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Float']>;
  framerate?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['String']>;
  video_codec?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SceneFilterType = {
  AND?: InputMaybe<SceneFilterType>;
  NOT?: InputMaybe<SceneFilterType>;
  OR?: InputMaybe<SceneFilterType>;
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter Scenes that have an exact phash match available */
  duplicated?: InputMaybe<PHashDuplicationCriterionInput>;
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>;
  /** Filter to only include scenes which have markers. `true` or `false` */
  has_markers?: InputMaybe<Scalars['String']>;
  /** Filter by interactive */
  interactive?: InputMaybe<Scalars['Boolean']>;
  /** Filter by InteractiveSpeed */
  interactive_speed?: InputMaybe<IntCriterionInput>;
  /** Filter to only include scenes missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter to only include scenes with this movie */
  movies?: InputMaybe<MultiCriterionInput>;
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']>;
  /** Filter by file oshash */
  oshash?: InputMaybe<StringCriterionInput>;
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>;
  /** Filter scenes by performer age at time of scene */
  performer_age?: InputMaybe<IntCriterionInput>;
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter scenes that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']>;
  /** Filter to only include scenes with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include scenes with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by file phash */
  phash?: InputMaybe<StringCriterionInput>;
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>;
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>;
  /** Filter by StashID */
  stash_id?: InputMaybe<StringCriterionInput>;
  /** Filter to only include scenes with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include scenes with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  title?: InputMaybe<StringCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

export type SceneHashInput = {
  checksum?: InputMaybe<Scalars['String']>;
  oshash?: InputMaybe<Scalars['String']>;
};

export type SceneMarker = {
  __typename?: 'SceneMarker';
  created_at: Scalars['Time'];
  id: Scalars['ID'];
  /** The path to the preview image for this marker */
  preview: Scalars['String'];
  primary_tag: Tag;
  scene: Scene;
  /** The path to the screenshot image for this marker */
  screenshot: Scalars['String'];
  seconds: Scalars['Float'];
  /** The path to stream this marker */
  stream: Scalars['String'];
  tags: Array<Tag>;
  title: Scalars['String'];
  updated_at: Scalars['Time'];
};

export type SceneMarkerCreateInput = {
  primary_tag_id: Scalars['ID'];
  scene_id: Scalars['ID'];
  seconds: Scalars['Float'];
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
};

export type SceneMarkerFilterType = {
  /** Filter to only include scene markers with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter to only include scene markers attached to a scene with these tags */
  scene_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include scene markers with this tag */
  tag_id?: InputMaybe<Scalars['ID']>;
  /** Filter to only include scene markers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
};

export type SceneMarkerTag = {
  __typename?: 'SceneMarkerTag';
  scene_markers: Array<SceneMarker>;
  tag: Tag;
};

export type SceneMarkerUpdateInput = {
  id: Scalars['ID'];
  primary_tag_id: Scalars['ID'];
  scene_id: Scalars['ID'];
  seconds: Scalars['Float'];
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
};

export type SceneMovie = {
  __typename?: 'SceneMovie';
  movie: Movie;
  scene_index?: Maybe<Scalars['Int']>;
};

export type SceneMovieId = {
  __typename?: 'SceneMovieID';
  movie_id: Scalars['ID'];
  scene_index?: Maybe<Scalars['String']>;
};

export type SceneMovieInput = {
  movie_id: Scalars['ID'];
  scene_index?: InputMaybe<Scalars['Int']>;
};

export type SceneParserInput = {
  capitalizeTitle?: InputMaybe<Scalars['Boolean']>;
  ignoreOrganized?: InputMaybe<Scalars['Boolean']>;
  ignoreWords?: InputMaybe<Array<Scalars['String']>>;
  whitespaceCharacters?: InputMaybe<Scalars['String']>;
};

export type SceneParserResult = {
  __typename?: 'SceneParserResult';
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  gallery_ids?: Maybe<Array<Scalars['ID']>>;
  movies?: Maybe<Array<SceneMovieId>>;
  performer_ids?: Maybe<Array<Scalars['ID']>>;
  rating?: Maybe<Scalars['Int']>;
  scene: Scene;
  studio_id?: Maybe<Scalars['ID']>;
  tag_ids?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SceneParserResultType = {
  __typename?: 'SceneParserResultType';
  count: Scalars['Int'];
  results: Array<SceneParserResult>;
};

export type ScenePathsType = {
  __typename?: 'ScenePathsType';
  chapters_vtt?: Maybe<Scalars['String']>;
  funscript?: Maybe<Scalars['String']>;
  interactive_heatmap?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
  screenshot?: Maybe<Scalars['String']>;
  sprite?: Maybe<Scalars['String']>;
  stream?: Maybe<Scalars['String']>;
  vtt?: Maybe<Scalars['String']>;
  webp?: Maybe<Scalars['String']>;
};

export type SceneStreamEndpoint = {
  __typename?: 'SceneStreamEndpoint';
  label?: Maybe<Scalars['String']>;
  mime_type?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type SceneUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  gallery_ids?: InputMaybe<Array<Scalars['ID']>>;
  id: Scalars['ID'];
  movies?: InputMaybe<Array<SceneMovieInput>>;
  organized?: InputMaybe<Scalars['Boolean']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  rating?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  studio_id?: InputMaybe<Scalars['ID']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']>>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ScenesDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
  ids: Array<Scalars['ID']>;
};

/** Type of the content a scraper generates */
export enum ScrapeContentType {
  Gallery = 'GALLERY',
  Movie = 'MOVIE',
  Performer = 'PERFORMER',
  Scene = 'SCENE'
}

export type ScrapeMultiPerformersInput = {
  /** Instructs to query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type ScrapeMultiScenesInput = {
  /** Instructs to query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type ScrapeSingleGalleryInput = {
  /** Instructs to query by gallery id */
  gallery_id?: InputMaybe<Scalars['ID']>;
  /** Instructs to query by gallery fragment */
  gallery_input?: InputMaybe<ScrapedGalleryInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>;
};

export type ScrapeSingleMovieInput = {
  /** Instructs to query by movie id */
  movie_id?: InputMaybe<Scalars['ID']>;
  /** Instructs to query by gallery fragment */
  movie_input?: InputMaybe<ScrapedMovieInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>;
};

export type ScrapeSinglePerformerInput = {
  /** Instructs to query by performer id */
  performer_id?: InputMaybe<Scalars['ID']>;
  /** Instructs to query by performer fragment */
  performer_input?: InputMaybe<ScrapedPerformerInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>;
};

export type ScrapeSingleSceneInput = {
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']>;
  /** Instructs to query by scene fingerprints */
  scene_id?: InputMaybe<Scalars['ID']>;
  /** Instructs to query by scene fragment */
  scene_input?: InputMaybe<ScrapedSceneInput>;
};

export enum ScrapeType {
  /** From existing object */
  Fragment = 'FRAGMENT',
  /** From text query */
  Name = 'NAME',
  /** From URL */
  Url = 'URL'
}

/** Scraped Content is the forming union over the different scrapers */
export type ScrapedContent = ScrapedGallery | ScrapedMovie | ScrapedPerformer | ScrapedScene | ScrapedStudio | ScrapedTag;

export type ScrapedGallery = {
  __typename?: 'ScrapedGallery';
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  performers?: Maybe<Array<ScrapedPerformer>>;
  studio?: Maybe<ScrapedStudio>;
  tags?: Maybe<Array<ScrapedTag>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ScrapedGalleryInput = {
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** A movie from a scraping operation... */
export type ScrapedMovie = {
  __typename?: 'ScrapedMovie';
  aliases?: Maybe<Scalars['String']>;
  /** This should be a base64 encoded data URL */
  back_image?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  director?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  /** This should be a base64 encoded data URL */
  front_image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  stored_id?: Maybe<Scalars['ID']>;
  studio?: Maybe<ScrapedStudio>;
  synopsis?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ScrapedMovieInput = {
  aliases?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  director?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  synopsis?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** A performer from a scraping operation... */
export type ScrapedPerformer = {
  __typename?: 'ScrapedPerformer';
  aliases?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['String']>;
  career_length?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  death_date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Scalars['String']>;
  eye_color?: Maybe<Scalars['String']>;
  fake_tits?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hair_color?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  /**
   * This should be a base64 encoded data URL
   * @deprecated use images instead
   */
  image?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Scalars['String']>>;
  instagram?: Maybe<Scalars['String']>;
  measurements?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  piercings?: Maybe<Scalars['String']>;
  remote_site_id?: Maybe<Scalars['String']>;
  /** Set if performer matched */
  stored_id?: Maybe<Scalars['ID']>;
  tags?: Maybe<Array<ScrapedTag>>;
  tattoos?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['String']>;
};

export type ScrapedPerformerInput = {
  aliases?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['String']>;
  career_length?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  death_date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  ethnicity?: InputMaybe<Scalars['String']>;
  eye_color?: InputMaybe<Scalars['String']>;
  fake_tits?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  hair_color?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  measurements?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  piercings?: InputMaybe<Scalars['String']>;
  remote_site_id?: InputMaybe<Scalars['String']>;
  /** Set if performer matched */
  stored_id?: InputMaybe<Scalars['ID']>;
  tattoos?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['String']>;
};

export type ScrapedScene = {
  __typename?: 'ScrapedScene';
  date?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  file?: Maybe<SceneFileType>;
  fingerprints?: Maybe<Array<StashBoxFingerprint>>;
  /** This should be a base64 encoded data URL */
  image?: Maybe<Scalars['String']>;
  movies?: Maybe<Array<ScrapedMovie>>;
  performers?: Maybe<Array<ScrapedPerformer>>;
  remote_site_id?: Maybe<Scalars['String']>;
  studio?: Maybe<ScrapedStudio>;
  tags?: Maybe<Array<ScrapedTag>>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ScrapedSceneInput = {
  date?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  remote_site_id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type ScrapedStudio = {
  __typename?: 'ScrapedStudio';
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  remote_site_id?: Maybe<Scalars['String']>;
  /** Set if studio matched */
  stored_id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type ScrapedTag = {
  __typename?: 'ScrapedTag';
  name: Scalars['String'];
  /** Set if tag matched */
  stored_id?: Maybe<Scalars['ID']>;
};

export type Scraper = {
  __typename?: 'Scraper';
  /** Details for gallery scraper */
  gallery?: Maybe<ScraperSpec>;
  id: Scalars['ID'];
  /** Details for movie scraper */
  movie?: Maybe<ScraperSpec>;
  name: Scalars['String'];
  /** Details for performer scraper */
  performer?: Maybe<ScraperSpec>;
  /** Details for scene scraper */
  scene?: Maybe<ScraperSpec>;
};

export type ScraperSource = {
  __typename?: 'ScraperSource';
  /** Scraper ID to scrape with. Should be unset if stash_box_index is set */
  scraper_id?: Maybe<Scalars['ID']>;
  /** Stash-box endpoint */
  stash_box_endpoint?: Maybe<Scalars['String']>;
  /**
   * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: Maybe<Scalars['Int']>;
};

export type ScraperSourceInput = {
  /** Scraper ID to scrape with. Should be unset if stash_box_index is set */
  scraper_id?: InputMaybe<Scalars['ID']>;
  /** Stash-box endpoint */
  stash_box_endpoint?: InputMaybe<Scalars['String']>;
  /** Index of the configured stash-box instance to use. Should be unset if scraper_id is set */
  stash_box_index?: InputMaybe<Scalars['Int']>;
};

export type ScraperSpec = {
  __typename?: 'ScraperSpec';
  supported_scrapes: Array<ScrapeType>;
  /** URLs matching these can be scraped with */
  urls?: Maybe<Array<Scalars['String']>>;
};

export type SetDefaultFilterInput = {
  /** JSON-encoded filter string - null to clear */
  filter?: InputMaybe<Scalars['String']>;
  mode: FilterMode;
};

export type SetupInput = {
  /** Empty to indicate $HOME/.stash/config.yml default */
  configLocation: Scalars['String'];
  /** Empty to indicate default */
  databaseFile: Scalars['String'];
  /** Empty to indicate default */
  generatedLocation: Scalars['String'];
  stashes: Array<StashConfigInput>;
};

export type ShortVersion = {
  __typename?: 'ShortVersion';
  shorthash: Scalars['String'];
  url: Scalars['String'];
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StashBox = {
  __typename?: 'StashBox';
  api_key: Scalars['String'];
  endpoint: Scalars['String'];
  name: Scalars['String'];
};

/** If neither performer_ids nor performer_names are set, tag all performers */
export type StashBoxBatchPerformerTagInput = {
  /** Stash endpoint to use for the performer tagging */
  endpoint: Scalars['Int'];
  /** Fields to exclude when executing the performer tagging */
  exclude_fields?: InputMaybe<Array<Scalars['String']>>;
  /** If set, only tag these performer ids */
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  /** If set, only tag these performer names */
  performer_names?: InputMaybe<Array<Scalars['String']>>;
  /** Refresh performers already tagged by StashBox if true. Only tag performers with no StashBox tagging if false */
  refresh: Scalars['Boolean'];
};

export type StashBoxDraftSubmissionInput = {
  id: Scalars['String'];
  stash_box_index: Scalars['Int'];
};

export type StashBoxFingerprint = {
  __typename?: 'StashBoxFingerprint';
  algorithm: Scalars['String'];
  duration: Scalars['Int'];
  hash: Scalars['String'];
};

export type StashBoxFingerprintSubmissionInput = {
  scene_ids: Array<Scalars['String']>;
  stash_box_index: Scalars['Int'];
};

export type StashBoxInput = {
  api_key: Scalars['String'];
  endpoint: Scalars['String'];
  name: Scalars['String'];
};

export type StashBoxPerformerQueryInput = {
  /** Instructs query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Query by query string */
  q?: InputMaybe<Scalars['String']>;
  /** Index of the configured stash-box instance to use */
  stash_box_index: Scalars['Int'];
};

export type StashBoxPerformerQueryResult = {
  __typename?: 'StashBoxPerformerQueryResult';
  query: Scalars['String'];
  results: Array<ScrapedPerformer>;
};

export type StashBoxSceneQueryInput = {
  /** Query by query string */
  q?: InputMaybe<Scalars['String']>;
  /** Instructs query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Index of the configured stash-box instance to use */
  stash_box_index: Scalars['Int'];
};

export type StashBoxValidationResult = {
  __typename?: 'StashBoxValidationResult';
  status: Scalars['String'];
  valid: Scalars['Boolean'];
};

export type StashConfig = {
  __typename?: 'StashConfig';
  excludeImage: Scalars['Boolean'];
  excludeVideo: Scalars['Boolean'];
  path: Scalars['String'];
};

/** Stash configuration details */
export type StashConfigInput = {
  excludeImage: Scalars['Boolean'];
  excludeVideo: Scalars['Boolean'];
  path: Scalars['String'];
};

export type StashId = {
  __typename?: 'StashID';
  endpoint: Scalars['String'];
  stash_id: Scalars['String'];
};

export type StashIdInput = {
  endpoint: Scalars['String'];
  stash_id: Scalars['String'];
};

export type StatsResultType = {
  __typename?: 'StatsResultType';
  gallery_count: Scalars['Int'];
  image_count: Scalars['Int'];
  images_size: Scalars['Float'];
  movie_count: Scalars['Int'];
  performer_count: Scalars['Int'];
  scene_count: Scalars['Int'];
  scenes_duration: Scalars['Float'];
  scenes_size: Scalars['Float'];
  studio_count: Scalars['Int'];
  tag_count: Scalars['Int'];
};

export enum StreamingResolutionEnum {
  /** 4k */
  FourK = 'FOUR_K',
  /** 1080p */
  FullHd = 'FULL_HD',
  /** 240p */
  Low = 'LOW',
  /** Original */
  Original = 'ORIGINAL',
  /** 480p */
  Standard = 'STANDARD',
  /** 720p */
  StandardHd = 'STANDARD_HD'
}

export type StringCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['String'];
};

export type Studio = {
  __typename?: 'Studio';
  aliases: Array<Scalars['String']>;
  checksum: Scalars['String'];
  child_studios: Array<Studio>;
  created_at: Scalars['Time'];
  details?: Maybe<Scalars['String']>;
  gallery_count?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  ignore_auto_tag: Scalars['Boolean'];
  image_count?: Maybe<Scalars['Int']>;
  image_path?: Maybe<Scalars['String']>;
  movie_count?: Maybe<Scalars['Int']>;
  movies: Array<Movie>;
  name: Scalars['String'];
  parent_studio?: Maybe<Studio>;
  rating?: Maybe<Scalars['Int']>;
  scene_count?: Maybe<Scalars['Int']>;
  stash_ids: Array<StashId>;
  updated_at: Scalars['Time'];
  url?: Maybe<Scalars['String']>;
};

export type StudioCreateInput = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  details?: InputMaybe<Scalars['String']>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent_id?: InputMaybe<Scalars['ID']>;
  rating?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  url?: InputMaybe<Scalars['String']>;
};

export type StudioDestroyInput = {
  id: Scalars['ID'];
};

export type StudioFilterType = {
  AND?: InputMaybe<StudioFilterType>;
  NOT?: InputMaybe<StudioFilterType>;
  OR?: InputMaybe<StudioFilterType>;
  /** Filter by studio aliases */
  aliases?: InputMaybe<StringCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include studios missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter to only include studios with this parent studio */
  parents?: InputMaybe<MultiCriterionInput>;
  /** Filter by rating */
  rating?: InputMaybe<IntCriterionInput>;
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by StashID */
  stash_id?: InputMaybe<StringCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

export type StudioUpdateInput = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  details?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['ID']>;
  rating?: InputMaybe<Scalars['Int']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  url?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Update from the metadata manager */
  jobsSubscribe: JobStatusUpdate;
  loggingSubscribe: Array<LogEntry>;
  scanCompleteSubscribe: Scalars['Boolean'];
};

export type SystemStatus = {
  __typename?: 'SystemStatus';
  appSchema: Scalars['Int'];
  configPath?: Maybe<Scalars['String']>;
  databasePath?: Maybe<Scalars['String']>;
  databaseSchema?: Maybe<Scalars['Int']>;
  status: SystemStatusEnum;
};

export enum SystemStatusEnum {
  NeedsMigration = 'NEEDS_MIGRATION',
  Ok = 'OK',
  Setup = 'SETUP'
}

export type Tag = {
  __typename?: 'Tag';
  aliases: Array<Scalars['String']>;
  children: Array<Tag>;
  created_at: Scalars['Time'];
  gallery_count?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  ignore_auto_tag: Scalars['Boolean'];
  image_count?: Maybe<Scalars['Int']>;
  image_path?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parents: Array<Tag>;
  performer_count?: Maybe<Scalars['Int']>;
  scene_count?: Maybe<Scalars['Int']>;
  scene_marker_count?: Maybe<Scalars['Int']>;
  updated_at: Scalars['Time'];
};

export type TagCreateInput = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  child_ids?: InputMaybe<Array<Scalars['ID']>>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parent_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type TagDestroyInput = {
  id: Scalars['ID'];
};

export type TagFilterType = {
  AND?: InputMaybe<TagFilterType>;
  NOT?: InputMaybe<TagFilterType>;
  OR?: InputMaybe<TagFilterType>;
  /** Filter by tag aliases */
  aliases?: InputMaybe<StringCriterionInput>;
  /** Filter by number f child tags the tag has */
  child_count?: InputMaybe<IntCriterionInput>;
  /** Filter by child tags */
  children?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by number of galleries with this tag */
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** Filter by number of images with this tag */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include tags missing this property */
  is_missing?: InputMaybe<Scalars['String']>;
  /** Filter by number of markers with this tag */
  marker_count?: InputMaybe<IntCriterionInput>;
  /** Filter by tag name */
  name?: InputMaybe<StringCriterionInput>;
  /** Filter by number of parent tags the tag has */
  parent_count?: InputMaybe<IntCriterionInput>;
  /** Filter by parent tags */
  parents?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by number of performers with this tag */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter by number of scenes with this tag */
  scene_count?: InputMaybe<IntCriterionInput>;
};

export type TagUpdateInput = {
  aliases?: InputMaybe<Array<Scalars['String']>>;
  child_ids?: InputMaybe<Array<Scalars['ID']>>;
  id: Scalars['ID'];
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parent_ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type TagsMergeInput = {
  destination: Scalars['ID'];
  source: Array<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  build_time: Scalars['String'];
  hash: Scalars['String'];
  version?: Maybe<Scalars['String']>;
};

export type ConfigGeneralDataFragment = { __typename?: 'ConfigGeneralResult', databasePath: string, generatedPath: string, metadataPath: string, scrapersPath: string, cachePath: string, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, createGalleriesFromFolders: boolean, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, pythonPath: string, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string }> };

export type ConfigInterfaceDataFragment = { __typename?: 'ConfigInterfaceResult', menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean } };

export type ConfigDlnaDataFragment = { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, whitelistedIPs: Array<string>, interfaces: Array<string> };

export type ConfigScrapingDataFragment = { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> };

export type IdentifyFieldOptionsDataFragment = { __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null };

export type IdentifyMetadataOptionsDataFragment = { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null };

export type ScraperSourceDataFragment = { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null };

export type ConfigDefaultSettingsDataFragment = { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', useFileMetadata: boolean, stripFileExtension: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null };

export type ConfigDataFragment = { __typename?: 'ConfigResult', general: { __typename?: 'ConfigGeneralResult', databasePath: string, generatedPath: string, metadataPath: string, scrapersPath: string, cachePath: string, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, createGalleriesFromFolders: boolean, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, pythonPath: string, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string }> }, interface: { __typename?: 'ConfigInterfaceResult', menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean } }, dlna: { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, whitelistedIPs: Array<string>, interfaces: Array<string> }, scraping: { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> }, defaults: { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', useFileMetadata: boolean, stripFileExtension: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null } };

export type SavedFilterDataFragment = { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, filter: string };

export type SlimGalleryDataFragment = { __typename?: 'Gallery', id: string, checksum: string, path?: string | null, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, image_count: number, cover?: { __typename?: 'Image', file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> };

export type GalleryDataFragment = { __typename?: 'Gallery', id: string, checksum: string, path?: string | null, created_at: any, updated_at: any, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, images: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }>, cover?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> };

export type SlimImageDataFragment = { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> };

export type ImageDataFragment = { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, created_at: any, updated_at: any, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, created_at: any, updated_at: any, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, images: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }>, cover?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }> };

export type JobDataFragment = { __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, startTime?: any | null, endTime?: any | null, addTime: any };

export type LogEntryDataFragment = { __typename?: 'LogEntry', time: any, level: LogLevel, message: string };

export type SlimMovieDataFragment = { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null };

export type MovieDataFragment = { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> };

export type SlimPerformerDataFragment = { __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, url?: string | null, twitter?: string | null, instagram?: string | null, image_path?: string | null, favorite: boolean, ignore_auto_tag: boolean, country?: string | null, birthdate?: string | null, ethnicity?: string | null, hair_color?: string | null, eye_color?: string | null, height?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, rating?: number | null, death_date?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> };

export type PerformerDataFragment = { __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> };

export type SceneMarkerDataFragment = { __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> };

export type SlimSceneDataFragment = { __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> };

export type SceneDataFragment = { __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, image_count: number, cover?: { __typename?: 'Image', file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> };

export type ScrapedPerformerDataFragment = { __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null };

export type ScrapedScenePerformerDataFragment = { __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null };

export type ScrapedMovieStudioDataFragment = { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null };

export type ScrapedMovieDataFragment = { __typename?: 'ScrapedMovie', name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null };

export type ScrapedSceneMovieDataFragment = { __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null };

export type ScrapedSceneStudioDataFragment = { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, remote_site_id?: string | null };

export type ScrapedSceneTagDataFragment = { __typename?: 'ScrapedTag', stored_id?: string | null, name: string };

export type ScrapedSceneDataFragment = { __typename?: 'ScrapedScene', title?: string | null, details?: string | null, url?: string | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, remote_site_id?: string | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null };

export type ScrapedGalleryDataFragment = { __typename?: 'ScrapedGallery', title?: string | null, details?: string | null, url?: string | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, remote_site_id?: string | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null };

export type ScrapedStashBoxSceneDataFragment = { __typename?: 'ScrapedScene', title?: string | null, details?: string | null, url?: string | null, date?: string | null, image?: string | null, remote_site_id?: string | null, duration?: number | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, remote_site_id?: string | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null }> | null };

export type ScrapedStashBoxPerformerDataFragment = { __typename?: 'StashBoxPerformerQueryResult', query: string, results: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> };

export type SlimStudioDataFragment = { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null };

export type StudioDataFragment = { __typename?: 'Studio', id: string, checksum: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, details?: string | null, rating?: number | null, aliases: Array<string>, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> };

export type SlimTagDataFragment = { __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null };

export type TagDataFragment = { __typename?: 'Tag', id: string, name: string, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, scene_marker_count?: number | null, image_count?: number | null, gallery_count?: number | null, performer_count?: number | null, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }> };

export type SetupMutationVariables = Exact<{
  input: SetupInput;
}>;


export type SetupMutation = { __typename?: 'Mutation', setup: boolean };

export type MigrateMutationVariables = Exact<{
  input: MigrateInput;
}>;


export type MigrateMutation = { __typename?: 'Mutation', migrate: boolean };

export type ConfigureGeneralMutationVariables = Exact<{
  input: ConfigGeneralInput;
}>;


export type ConfigureGeneralMutation = { __typename?: 'Mutation', configureGeneral: { __typename?: 'ConfigGeneralResult', databasePath: string, generatedPath: string, metadataPath: string, scrapersPath: string, cachePath: string, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, createGalleriesFromFolders: boolean, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, pythonPath: string, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string }> } };

export type ConfigureInterfaceMutationVariables = Exact<{
  input: ConfigInterfaceInput;
}>;


export type ConfigureInterfaceMutation = { __typename?: 'Mutation', configureInterface: { __typename?: 'ConfigInterfaceResult', menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean } } };

export type ConfigureDlnaMutationVariables = Exact<{
  input: ConfigDlnaInput;
}>;


export type ConfigureDlnaMutation = { __typename?: 'Mutation', configureDLNA: { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, whitelistedIPs: Array<string>, interfaces: Array<string> } };

export type ConfigureScrapingMutationVariables = Exact<{
  input: ConfigScrapingInput;
}>;


export type ConfigureScrapingMutation = { __typename?: 'Mutation', configureScraping: { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> } };

export type ConfigureDefaultsMutationVariables = Exact<{
  input: ConfigDefaultSettingsInput;
}>;


export type ConfigureDefaultsMutation = { __typename?: 'Mutation', configureDefaults: { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', useFileMetadata: boolean, stripFileExtension: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null } };

export type GenerateApiKeyMutationVariables = Exact<{
  input: GenerateApiKeyInput;
}>;


export type GenerateApiKeyMutation = { __typename?: 'Mutation', generateAPIKey: string };

export type EnableDlnaMutationVariables = Exact<{
  input: EnableDlnaInput;
}>;


export type EnableDlnaMutation = { __typename?: 'Mutation', enableDLNA: boolean };

export type DisableDlnaMutationVariables = Exact<{
  input: DisableDlnaInput;
}>;


export type DisableDlnaMutation = { __typename?: 'Mutation', disableDLNA: boolean };

export type AddTempDlnaipMutationVariables = Exact<{
  input: AddTempDlnaipInput;
}>;


export type AddTempDlnaipMutation = { __typename?: 'Mutation', addTempDLNAIP: boolean };

export type RemoveTempDlnaipMutationVariables = Exact<{
  input: RemoveTempDlnaipInput;
}>;


export type RemoveTempDlnaipMutation = { __typename?: 'Mutation', removeTempDLNAIP: boolean };

export type SaveFilterMutationVariables = Exact<{
  input: SaveFilterInput;
}>;


export type SaveFilterMutation = { __typename?: 'Mutation', saveFilter: { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, filter: string } };

export type DestroySavedFilterMutationVariables = Exact<{
  input: DestroyFilterInput;
}>;


export type DestroySavedFilterMutation = { __typename?: 'Mutation', destroySavedFilter: boolean };

export type SetDefaultFilterMutationVariables = Exact<{
  input: SetDefaultFilterInput;
}>;


export type SetDefaultFilterMutation = { __typename?: 'Mutation', setDefaultFilter: boolean };

export type GalleryCreateMutationVariables = Exact<{
  input: GalleryCreateInput;
}>;


export type GalleryCreateMutation = { __typename?: 'Mutation', galleryCreate?: { __typename?: 'Gallery', id: string, checksum: string, path?: string | null, created_at: any, updated_at: any, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, images: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }>, cover?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } | null };

export type GalleryUpdateMutationVariables = Exact<{
  input: GalleryUpdateInput;
}>;


export type GalleryUpdateMutation = { __typename?: 'Mutation', galleryUpdate?: { __typename?: 'Gallery', id: string, checksum: string, path?: string | null, created_at: any, updated_at: any, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, images: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }>, cover?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } | null };

export type BulkGalleryUpdateMutationVariables = Exact<{
  input: BulkGalleryUpdateInput;
}>;


export type BulkGalleryUpdateMutation = { __typename?: 'Mutation', bulkGalleryUpdate?: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, created_at: any, updated_at: any, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, images: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }>, cover?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }> | null };

export type GalleriesUpdateMutationVariables = Exact<{
  input: Array<GalleryUpdateInput> | GalleryUpdateInput;
}>;


export type GalleriesUpdateMutation = { __typename?: 'Mutation', galleriesUpdate?: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, created_at: any, updated_at: any, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, images: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }>, cover?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } | null> | null };

export type GalleryDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type GalleryDestroyMutation = { __typename?: 'Mutation', galleryDestroy: boolean };

export type AddGalleryImagesMutationVariables = Exact<{
  gallery_id: Scalars['ID'];
  image_ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type AddGalleryImagesMutation = { __typename?: 'Mutation', addGalleryImages: boolean };

export type RemoveGalleryImagesMutationVariables = Exact<{
  gallery_id: Scalars['ID'];
  image_ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type RemoveGalleryImagesMutation = { __typename?: 'Mutation', removeGalleryImages: boolean };

export type ImageUpdateMutationVariables = Exact<{
  input: ImageUpdateInput;
}>;


export type ImageUpdateMutation = { __typename?: 'Mutation', imageUpdate?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null };

export type BulkImageUpdateMutationVariables = Exact<{
  input: BulkImageUpdateInput;
}>;


export type BulkImageUpdateMutation = { __typename?: 'Mutation', bulkImageUpdate?: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }> | null };

export type ImagesUpdateMutationVariables = Exact<{
  input: Array<ImageUpdateInput> | ImageUpdateInput;
}>;


export type ImagesUpdateMutation = { __typename?: 'Mutation', imagesUpdate?: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null> | null };

export type ImageIncrementOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageIncrementOMutation = { __typename?: 'Mutation', imageIncrementO: number };

export type ImageDecrementOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageDecrementOMutation = { __typename?: 'Mutation', imageDecrementO: number };

export type ImageResetOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageResetOMutation = { __typename?: 'Mutation', imageResetO: number };

export type ImageDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type ImageDestroyMutation = { __typename?: 'Mutation', imageDestroy: boolean };

export type ImagesDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type ImagesDestroyMutation = { __typename?: 'Mutation', imagesDestroy: boolean };

export type StopJobMutationVariables = Exact<{
  job_id: Scalars['ID'];
}>;


export type StopJobMutation = { __typename?: 'Mutation', stopJob: boolean };

export type StopAllJobsMutationVariables = Exact<{ [key: string]: never; }>;


export type StopAllJobsMutation = { __typename?: 'Mutation', stopAllJobs: boolean };

export type MetadataImportMutationVariables = Exact<{ [key: string]: never; }>;


export type MetadataImportMutation = { __typename?: 'Mutation', metadataImport: string };

export type MetadataExportMutationVariables = Exact<{ [key: string]: never; }>;


export type MetadataExportMutation = { __typename?: 'Mutation', metadataExport: string };

export type ExportObjectsMutationVariables = Exact<{
  input: ExportObjectsInput;
}>;


export type ExportObjectsMutation = { __typename?: 'Mutation', exportObjects?: string | null };

export type ImportObjectsMutationVariables = Exact<{
  input: ImportObjectsInput;
}>;


export type ImportObjectsMutation = { __typename?: 'Mutation', importObjects: string };

export type MetadataScanMutationVariables = Exact<{
  input: ScanMetadataInput;
}>;


export type MetadataScanMutation = { __typename?: 'Mutation', metadataScan: string };

export type MetadataGenerateMutationVariables = Exact<{
  input: GenerateMetadataInput;
}>;


export type MetadataGenerateMutation = { __typename?: 'Mutation', metadataGenerate: string };

export type MetadataAutoTagMutationVariables = Exact<{
  input: AutoTagMetadataInput;
}>;


export type MetadataAutoTagMutation = { __typename?: 'Mutation', metadataAutoTag: string };

export type MetadataIdentifyMutationVariables = Exact<{
  input: IdentifyMetadataInput;
}>;


export type MetadataIdentifyMutation = { __typename?: 'Mutation', metadataIdentify: string };

export type MetadataCleanMutationVariables = Exact<{
  input: CleanMetadataInput;
}>;


export type MetadataCleanMutation = { __typename?: 'Mutation', metadataClean: string };

export type MigrateHashNamingMutationVariables = Exact<{ [key: string]: never; }>;


export type MigrateHashNamingMutation = { __typename?: 'Mutation', migrateHashNaming: string };

export type BackupDatabaseMutationVariables = Exact<{
  input: BackupDatabaseInput;
}>;


export type BackupDatabaseMutation = { __typename?: 'Mutation', backupDatabase?: string | null };

export type MovieCreateMutationVariables = Exact<{
  name: Scalars['String'];
  aliases?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  date?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  studio_id?: InputMaybe<Scalars['ID']>;
  director?: InputMaybe<Scalars['String']>;
  synopsis?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  front_image?: InputMaybe<Scalars['String']>;
  back_image?: InputMaybe<Scalars['String']>;
}>;


export type MovieCreateMutation = { __typename?: 'Mutation', movieCreate?: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } | null };

export type MovieUpdateMutationVariables = Exact<{
  input: MovieUpdateInput;
}>;


export type MovieUpdateMutation = { __typename?: 'Mutation', movieUpdate?: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } | null };

export type BulkMovieUpdateMutationVariables = Exact<{
  input: BulkMovieUpdateInput;
}>;


export type BulkMovieUpdateMutation = { __typename?: 'Mutation', bulkMovieUpdate?: Array<{ __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }> | null };

export type MovieDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MovieDestroyMutation = { __typename?: 'Mutation', movieDestroy: boolean };

export type MoviesDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type MoviesDestroyMutation = { __typename?: 'Mutation', moviesDestroy: boolean };

export type PerformerCreateMutationVariables = Exact<{
  input: PerformerCreateInput;
}>;


export type PerformerCreateMutation = { __typename?: 'Mutation', performerCreate?: { __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type PerformerUpdateMutationVariables = Exact<{
  input: PerformerUpdateInput;
}>;


export type PerformerUpdateMutation = { __typename?: 'Mutation', performerUpdate?: { __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type BulkPerformerUpdateMutationVariables = Exact<{
  input: BulkPerformerUpdateInput;
}>;


export type BulkPerformerUpdateMutation = { __typename?: 'Mutation', bulkPerformerUpdate?: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }> | null };

export type PerformerDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PerformerDestroyMutation = { __typename?: 'Mutation', performerDestroy: boolean };

export type PerformersDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type PerformersDestroyMutation = { __typename?: 'Mutation', performersDestroy: boolean };

export type ReloadPluginsMutationVariables = Exact<{ [key: string]: never; }>;


export type ReloadPluginsMutation = { __typename?: 'Mutation', reloadPlugins: boolean };

export type RunPluginTaskMutationVariables = Exact<{
  plugin_id: Scalars['ID'];
  task_name: Scalars['String'];
  args?: InputMaybe<Array<PluginArgInput> | PluginArgInput>;
}>;


export type RunPluginTaskMutation = { __typename?: 'Mutation', runPluginTask: string };

export type SceneMarkerCreateMutationVariables = Exact<{
  title: Scalars['String'];
  seconds: Scalars['Float'];
  scene_id: Scalars['ID'];
  primary_tag_id: Scalars['ID'];
  tag_ids?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type SceneMarkerCreateMutation = { __typename?: 'Mutation', sceneMarkerCreate?: { __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> } | null };

export type SceneMarkerUpdateMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  seconds: Scalars['Float'];
  scene_id: Scalars['ID'];
  primary_tag_id: Scalars['ID'];
  tag_ids?: InputMaybe<Array<Scalars['ID']> | Scalars['ID']>;
}>;


export type SceneMarkerUpdateMutation = { __typename?: 'Mutation', sceneMarkerUpdate?: { __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> } | null };

export type SceneMarkerDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneMarkerDestroyMutation = { __typename?: 'Mutation', sceneMarkerDestroy: boolean };

export type SceneUpdateMutationVariables = Exact<{
  input: SceneUpdateInput;
}>;


export type SceneUpdateMutation = { __typename?: 'Mutation', sceneUpdate?: { __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, image_count: number, cover?: { __typename?: 'Image', file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

export type BulkSceneUpdateMutationVariables = Exact<{
  input: BulkSceneUpdateInput;
}>;


export type BulkSceneUpdateMutation = { __typename?: 'Mutation', bulkSceneUpdate?: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, image_count: number, cover?: { __typename?: 'Image', file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> }> | null };

export type ScenesUpdateMutationVariables = Exact<{
  input: Array<SceneUpdateInput> | SceneUpdateInput;
}>;


export type ScenesUpdateMutation = { __typename?: 'Mutation', scenesUpdate?: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, image_count: number, cover?: { __typename?: 'Image', file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null> | null };

export type SceneIncrementOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneIncrementOMutation = { __typename?: 'Mutation', sceneIncrementO: number };

export type SceneDecrementOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneDecrementOMutation = { __typename?: 'Mutation', sceneDecrementO: number };

export type SceneResetOMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneResetOMutation = { __typename?: 'Mutation', sceneResetO: number };

export type SceneDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type SceneDestroyMutation = { __typename?: 'Mutation', sceneDestroy: boolean };

export type ScenesDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
  delete_file?: InputMaybe<Scalars['Boolean']>;
  delete_generated?: InputMaybe<Scalars['Boolean']>;
}>;


export type ScenesDestroyMutation = { __typename?: 'Mutation', scenesDestroy: boolean };

export type SceneGenerateScreenshotMutationVariables = Exact<{
  id: Scalars['ID'];
  at?: InputMaybe<Scalars['Float']>;
}>;


export type SceneGenerateScreenshotMutation = { __typename?: 'Mutation', sceneGenerateScreenshot: string };

export type ReloadScrapersMutationVariables = Exact<{ [key: string]: never; }>;


export type ReloadScrapersMutation = { __typename?: 'Mutation', reloadScrapers: boolean };

export type SubmitStashBoxFingerprintsMutationVariables = Exact<{
  input: StashBoxFingerprintSubmissionInput;
}>;


export type SubmitStashBoxFingerprintsMutation = { __typename?: 'Mutation', submitStashBoxFingerprints: boolean };

export type StashBoxBatchPerformerTagMutationVariables = Exact<{
  input: StashBoxBatchPerformerTagInput;
}>;


export type StashBoxBatchPerformerTagMutation = { __typename?: 'Mutation', stashBoxBatchPerformerTag: string };

export type SubmitStashBoxSceneDraftMutationVariables = Exact<{
  input: StashBoxDraftSubmissionInput;
}>;


export type SubmitStashBoxSceneDraftMutation = { __typename?: 'Mutation', submitStashBoxSceneDraft?: string | null };

export type SubmitStashBoxPerformerDraftMutationVariables = Exact<{
  input: StashBoxDraftSubmissionInput;
}>;


export type SubmitStashBoxPerformerDraftMutation = { __typename?: 'Mutation', submitStashBoxPerformerDraft?: string | null };

export type StudioCreateMutationVariables = Exact<{
  input: StudioCreateInput;
}>;


export type StudioCreateMutation = { __typename?: 'Mutation', studioCreate?: { __typename?: 'Studio', id: string, checksum: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, details?: string | null, rating?: number | null, aliases: Array<string>, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type StudioUpdateMutationVariables = Exact<{
  input: StudioUpdateInput;
}>;


export type StudioUpdateMutation = { __typename?: 'Mutation', studioUpdate?: { __typename?: 'Studio', id: string, checksum: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, details?: string | null, rating?: number | null, aliases: Array<string>, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type StudioDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type StudioDestroyMutation = { __typename?: 'Mutation', studioDestroy: boolean };

export type StudiosDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type StudiosDestroyMutation = { __typename?: 'Mutation', studiosDestroy: boolean };

export type TagCreateMutationVariables = Exact<{
  input: TagCreateInput;
}>;


export type TagCreateMutation = { __typename?: 'Mutation', tagCreate?: { __typename?: 'Tag', id: string, name: string, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, scene_marker_count?: number | null, image_count?: number | null, gallery_count?: number | null, performer_count?: number | null, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }> } | null };

export type TagDestroyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TagDestroyMutation = { __typename?: 'Mutation', tagDestroy: boolean };

export type TagsDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type TagsDestroyMutation = { __typename?: 'Mutation', tagsDestroy: boolean };

export type TagUpdateMutationVariables = Exact<{
  input: TagUpdateInput;
}>;


export type TagUpdateMutation = { __typename?: 'Mutation', tagUpdate?: { __typename?: 'Tag', id: string, name: string, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, scene_marker_count?: number | null, image_count?: number | null, gallery_count?: number | null, performer_count?: number | null, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }> } | null };

export type TagsMergeMutationVariables = Exact<{
  source: Array<Scalars['ID']> | Scalars['ID'];
  destination: Scalars['ID'];
}>;


export type TagsMergeMutation = { __typename?: 'Mutation', tagsMerge?: { __typename?: 'Tag', id: string, name: string, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, scene_marker_count?: number | null, image_count?: number | null, gallery_count?: number | null, performer_count?: number | null, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }> } | null };

export type DlnaStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type DlnaStatusQuery = { __typename?: 'Query', dlnaStatus: { __typename?: 'DLNAStatus', running: boolean, until?: any | null, recentIPAddresses: Array<string>, allowedIPAddresses: Array<{ __typename?: 'DLNAIP', ipAddress: string, until?: any | null }> } };

export type FindSavedFiltersQueryVariables = Exact<{
  mode: FilterMode;
}>;


export type FindSavedFiltersQuery = { __typename?: 'Query', findSavedFilters: Array<{ __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, filter: string }> };

export type FindDefaultFilterQueryVariables = Exact<{
  mode: FilterMode;
}>;


export type FindDefaultFilterQuery = { __typename?: 'Query', findDefaultFilter?: { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, filter: string } | null };

export type FindGalleriesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  gallery_filter?: InputMaybe<GalleryFilterType>;
}>;


export type FindGalleriesQuery = { __typename?: 'Query', findGalleries: { __typename?: 'FindGalleriesResultType', count: number, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, image_count: number, cover?: { __typename?: 'Image', file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }> } };

export type FindGalleryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindGalleryQuery = { __typename?: 'Query', findGallery?: { __typename?: 'Gallery', id: string, checksum: string, path?: string | null, created_at: any, updated_at: any, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, images: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }>, cover?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } | null };

export type FindImagesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  image_filter?: InputMaybe<ImageFilterType>;
  image_ids?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type FindImagesQuery = { __typename?: 'Query', findImages: { __typename?: 'FindImagesResultType', count: number, megapixels: number, filesize: number, images: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }> } };

export type FindImageQueryVariables = Exact<{
  id: Scalars['ID'];
  checksum?: InputMaybe<Scalars['String']>;
}>;


export type FindImageQuery = { __typename?: 'Query', findImage?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, created_at: any, updated_at: any, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, created_at: any, updated_at: any, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, images: Array<{ __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> }>, cover?: { __typename?: 'Image', id: string, checksum?: string | null, title?: string | null, rating?: number | null, organized: boolean, o_counter?: number | null, path: string, file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }> } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }> } | null };

export type JobQueueQueryVariables = Exact<{ [key: string]: never; }>;


export type JobQueueQuery = { __typename?: 'Query', jobQueue?: Array<{ __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, startTime?: any | null, endTime?: any | null, addTime: any }> | null };

export type FindJobQueryVariables = Exact<{
  input: FindJobInput;
}>;


export type FindJobQuery = { __typename?: 'Query', findJob?: { __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, startTime?: any | null, endTime?: any | null, addTime: any } | null };

export type SceneWallQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']>;
}>;


export type SceneWallQuery = { __typename?: 'Query', sceneWall: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, image_count: number, cover?: { __typename?: 'Image', file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> }> };

export type MarkerWallQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']>;
}>;


export type MarkerWallQuery = { __typename?: 'Query', markerWall: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }> };

export type MarkerStringsQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type MarkerStringsQuery = { __typename?: 'Query', markerStrings: Array<{ __typename?: 'MarkerStringsResultType', id: string, count: number, title: string } | null> };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'Query', allTags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, scene_marker_count?: number | null, image_count?: number | null, gallery_count?: number | null, performer_count?: number | null, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }> }> };

export type AllPerformersForFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPerformersForFilterQuery = { __typename?: 'Query', allPerformers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, url?: string | null, twitter?: string | null, instagram?: string | null, image_path?: string | null, favorite: boolean, ignore_auto_tag: boolean, country?: string | null, birthdate?: string | null, ethnicity?: string | null, hair_color?: string | null, eye_color?: string | null, height?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, rating?: number | null, death_date?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> };

export type AllStudiosForFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type AllStudiosForFilterQuery = { __typename?: 'Query', allStudios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null }> };

export type AllMoviesForFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type AllMoviesForFilterQuery = { __typename?: 'Query', allMovies: Array<{ __typename?: 'Movie', id: string, name: string, front_image_path?: string | null }> };

export type AllTagsForFilterQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsForFilterQuery = { __typename?: 'Query', allTags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> };

export type StatsQueryVariables = Exact<{ [key: string]: never; }>;


export type StatsQuery = { __typename?: 'Query', stats: { __typename?: 'StatsResultType', scene_count: number, scenes_size: number, scenes_duration: number, image_count: number, images_size: number, gallery_count: number, performer_count: number, studio_count: number, movie_count: number, tag_count: number } };

export type LogsQueryVariables = Exact<{ [key: string]: never; }>;


export type LogsQuery = { __typename?: 'Query', logs: Array<{ __typename?: 'LogEntry', time: any, level: LogLevel, message: string }> };

export type VersionQueryVariables = Exact<{ [key: string]: never; }>;


export type VersionQuery = { __typename?: 'Query', version: { __typename?: 'Version', version?: string | null, hash: string, build_time: string } };

export type LatestVersionQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestVersionQuery = { __typename?: 'Query', latestversion: { __typename?: 'ShortVersion', shorthash: string, url: string } };

export type FindMoviesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  movie_filter?: InputMaybe<MovieFilterType>;
}>;


export type FindMoviesQuery = { __typename?: 'Query', findMovies: { __typename?: 'FindMoviesResultType', count: number, movies: Array<{ __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }> } };

export type FindMovieQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindMovieQuery = { __typename?: 'Query', findMovie?: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } | null };

export type FindPerformersQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  performer_filter?: InputMaybe<PerformerFilterType>;
}>;


export type FindPerformersQuery = { __typename?: 'Query', findPerformers: { __typename?: 'FindPerformersResultType', count: number, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }> } };

export type FindPerformerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindPerformerQuery = { __typename?: 'Query', findPerformer?: { __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type PluginsQueryVariables = Exact<{ [key: string]: never; }>;


export type PluginsQuery = { __typename?: 'Query', plugins?: Array<{ __typename?: 'Plugin', id: string, name: string, description?: string | null, url?: string | null, version?: string | null, tasks?: Array<{ __typename?: 'PluginTask', name: string, description?: string | null }> | null, hooks?: Array<{ __typename?: 'PluginHook', name: string, description?: string | null, hooks?: Array<string> | null }> | null }> | null };

export type PluginTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type PluginTasksQuery = { __typename?: 'Query', pluginTasks?: Array<{ __typename?: 'PluginTask', name: string, description?: string | null, plugin: { __typename?: 'Plugin', id: string, name: string } }> | null };

export type FindSceneMarkersQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  scene_marker_filter?: InputMaybe<SceneMarkerFilterType>;
}>;


export type FindSceneMarkersQuery = { __typename?: 'Query', findSceneMarkers: { __typename?: 'FindSceneMarkersResultType', count: number, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }> } };

export type FindScenesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  scene_filter?: InputMaybe<SceneFilterType>;
  scene_ids?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type FindScenesQuery = { __typename?: 'Query', findScenes: { __typename?: 'FindScenesResultType', count: number, filesize: number, duration: number, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, image_count: number, cover?: { __typename?: 'Image', file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> }> } };

export type FindScenesByPathRegexQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
}>;


export type FindScenesByPathRegexQuery = { __typename?: 'Query', findScenesByPathRegex: { __typename?: 'FindScenesResultType', count: number, filesize: number, duration: number, scenes: Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }> } };

export type FindDuplicateScenesQueryVariables = Exact<{
  distance?: InputMaybe<Scalars['Int']>;
}>;


export type FindDuplicateScenesQuery = { __typename?: 'Query', findDuplicateScenes: Array<Array<{ __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }>> };

export type FindSceneQueryVariables = Exact<{
  id: Scalars['ID'];
  checksum?: InputMaybe<Scalars['String']>;
}>;


export type FindSceneQuery = { __typename?: 'Query', findScene?: { __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, created_at: any, updated_at: any, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, checksum: string, path?: string | null, title?: string | null, date?: string | null, url?: string | null, details?: string | null, rating?: number | null, organized: boolean, image_count: number, cover?: { __typename?: 'Image', file: { __typename?: 'ImageFileType', size?: number | null, width?: number | null, height?: number | null }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, checksum: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating?: number | null, director?: string | null, synopsis?: string | null, url?: string | null, front_image_path?: string | null, back_image_path?: string | null, scene_count?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating?: number | null, aliases: Array<string>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null } | null, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, path: string }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, performers: Array<{ __typename?: 'Performer', id: string, checksum: string, name?: string | null, url?: string | null, gender?: GenderEnum | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, rating?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

export type FindSceneMarkerTagsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindSceneMarkerTagsQuery = { __typename?: 'Query', sceneMarkerTags: Array<{ __typename?: 'SceneMarkerTag', tag: { __typename?: 'Tag', id: string, name: string }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string }, primary_tag: { __typename?: 'Tag', id: string, name: string, aliases: Array<string> }, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string> }> }> }> };

export type ParseSceneFilenamesQueryVariables = Exact<{
  filter: FindFilterType;
  config: SceneParserInput;
}>;


export type ParseSceneFilenamesQuery = { __typename?: 'Query', parseSceneFilenames: { __typename?: 'SceneParserResultType', count: number, results: Array<{ __typename?: 'SceneParserResult', title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, studio_id?: string | null, gallery_ids?: Array<string> | null, performer_ids?: Array<string> | null, tag_ids?: Array<string> | null, scene: { __typename?: 'Scene', id: string, checksum?: string | null, oshash?: string | null, title?: string | null, details?: string | null, url?: string | null, date?: string | null, rating?: number | null, o_counter?: number | null, organized: boolean, path: string, phash?: string | null, interactive: boolean, interactive_speed?: number | null, file: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null }, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, chapters_vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number }>, galleries: Array<{ __typename?: 'Gallery', id: string, path?: string | null, title?: string | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, movies: Array<{ __typename?: 'SceneMovie', scene_index?: number | null, movie: { __typename?: 'Movie', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string }> }, movies?: Array<{ __typename?: 'SceneMovieID', movie_id: string }> | null }> } };

export type SceneStreamsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SceneStreamsQuery = { __typename?: 'Query', findScene?: { __typename?: 'Scene', sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

export type ScrapeFreeonesPerformersQueryVariables = Exact<{
  q: Scalars['String'];
}>;


export type ScrapeFreeonesPerformersQuery = { __typename?: 'Query', scrapeFreeonesPerformerList: Array<string> };

export type ListPerformerScrapersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPerformerScrapersQuery = { __typename?: 'Query', listPerformerScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, performer?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

export type ListSceneScrapersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListSceneScrapersQuery = { __typename?: 'Query', listSceneScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, scene?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

export type ListGalleryScrapersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListGalleryScrapersQuery = { __typename?: 'Query', listGalleryScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, gallery?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

export type ListMovieScrapersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListMovieScrapersQuery = { __typename?: 'Query', listMovieScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, movie?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

export type ScrapeSinglePerformerQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSinglePerformerInput;
}>;


export type ScrapeSinglePerformerQuery = { __typename?: 'Query', scrapeSinglePerformer: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> };

export type ScrapeMultiPerformersQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeMultiPerformersInput;
}>;


export type ScrapeMultiPerformersQuery = { __typename?: 'Query', scrapeMultiPerformers: Array<Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }>> };

export type ScrapePerformerUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type ScrapePerformerUrlQuery = { __typename?: 'Query', scrapePerformerURL?: { __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null } | null };

export type ScrapeSingleSceneQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleSceneInput;
}>;


export type ScrapeSingleSceneQuery = { __typename?: 'Query', scrapeSingleScene: Array<{ __typename?: 'ScrapedScene', title?: string | null, details?: string | null, url?: string | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, remote_site_id?: string | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null }> };

export type ScrapeMultiScenesQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeMultiScenesInput;
}>;


export type ScrapeMultiScenesQuery = { __typename?: 'Query', scrapeMultiScenes: Array<Array<{ __typename?: 'ScrapedScene', title?: string | null, details?: string | null, url?: string | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, remote_site_id?: string | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null }>> };

export type ScrapeSceneUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type ScrapeSceneUrlQuery = { __typename?: 'Query', scrapeSceneURL?: { __typename?: 'ScrapedScene', title?: string | null, details?: string | null, url?: string | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, remote_site_id?: string | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null, movies?: Array<{ __typename?: 'ScrapedMovie', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null } | null };

export type ScrapeSingleGalleryQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleGalleryInput;
}>;


export type ScrapeSingleGalleryQuery = { __typename?: 'Query', scrapeSingleGallery: Array<{ __typename?: 'ScrapedGallery', title?: string | null, details?: string | null, url?: string | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, remote_site_id?: string | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null }> };

export type ScrapeGalleryUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type ScrapeGalleryUrlQuery = { __typename?: 'Query', scrapeGalleryURL?: { __typename?: 'ScrapedGallery', title?: string | null, details?: string | null, url?: string | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null, remote_site_id?: string | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, gender?: string | null, url?: string | null, twitter?: string | null, instagram?: string | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, career_length?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string }> | null }> | null } | null };

export type ScrapeMovieUrlQueryVariables = Exact<{
  url: Scalars['String'];
}>;


export type ScrapeMovieUrlQuery = { __typename?: 'Query', scrapeMovieURL?: { __typename?: 'ScrapedMovie', name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, url?: string | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, url?: string | null } | null } | null };

export type ConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type ConfigurationQuery = { __typename?: 'Query', configuration: { __typename?: 'ConfigResult', general: { __typename?: 'ConfigGeneralResult', databasePath: string, generatedPath: string, metadataPath: string, scrapersPath: string, cachePath: string, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, createGalleriesFromFolders: boolean, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, pythonPath: string, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string }> }, interface: { __typename?: 'ConfigInterfaceResult', menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean } }, dlna: { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, whitelistedIPs: Array<string>, interfaces: Array<string> }, scraping: { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> }, defaults: { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', useFileMetadata: boolean, stripFileExtension: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, includeMalePerformers?: boolean | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null } } };

export type DirectoryQueryVariables = Exact<{
  path?: InputMaybe<Scalars['String']>;
}>;


export type DirectoryQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', path: string, parent?: string | null, directories: Array<string> } };

export type ValidateStashBoxQueryVariables = Exact<{
  input: StashBoxInput;
}>;


export type ValidateStashBoxQuery = { __typename?: 'Query', validateStashBoxCredentials: { __typename?: 'StashBoxValidationResult', valid: boolean, status: string } };

export type SystemStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type SystemStatusQuery = { __typename?: 'Query', systemStatus: { __typename?: 'SystemStatus', databaseSchema?: number | null, databasePath?: string | null, appSchema: number, status: SystemStatusEnum, configPath?: string | null } };

export type FindStudiosQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  studio_filter?: InputMaybe<StudioFilterType>;
}>;


export type FindStudiosQuery = { __typename?: 'Query', findStudios: { __typename?: 'FindStudiosResultType', count: number, studios: Array<{ __typename?: 'Studio', id: string, checksum: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, details?: string | null, rating?: number | null, aliases: Array<string>, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> }> } };

export type FindStudioQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindStudioQuery = { __typename?: 'Query', findStudio?: { __typename?: 'Studio', id: string, checksum: string, name: string, url?: string | null, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, image_count?: number | null, gallery_count?: number | null, movie_count?: number | null, details?: string | null, rating?: number | null, aliases: Array<string>, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string }> } | null };

export type FindTagsQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  tag_filter?: InputMaybe<TagFilterType>;
}>;


export type FindTagsQuery = { __typename?: 'Query', findTags: { __typename?: 'FindTagsResultType', count: number, tags: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, scene_marker_count?: number | null, image_count?: number | null, gallery_count?: number | null, performer_count?: number | null, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }> }> } };

export type FindTagQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindTagQuery = { __typename?: 'Query', findTag?: { __typename?: 'Tag', id: string, name: string, aliases: Array<string>, ignore_auto_tag: boolean, image_path?: string | null, scene_count?: number | null, scene_marker_count?: number | null, image_count?: number | null, gallery_count?: number | null, performer_count?: number | null, parents: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }>, children: Array<{ __typename?: 'Tag', id: string, name: string, aliases: Array<string>, image_path?: string | null }> } | null };

export type JobsSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type JobsSubscribeSubscription = { __typename?: 'Subscription', jobsSubscribe: { __typename?: 'JobStatusUpdate', type: JobStatusUpdateType, job: { __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null } } };

export type LoggingSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type LoggingSubscribeSubscription = { __typename?: 'Subscription', loggingSubscribe: Array<{ __typename?: 'LogEntry', time: any, level: LogLevel, message: string }> };

export type ScanCompleteSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ScanCompleteSubscribeSubscription = { __typename?: 'Subscription', scanCompleteSubscribe: boolean };

export const ConfigGeneralDataFragmentDoc = gql`
    fragment ConfigGeneralData on ConfigGeneralResult {
  stashes {
    path
    excludeVideo
    excludeImage
  }
  databasePath
  generatedPath
  metadataPath
  scrapersPath
  cachePath
  calculateMD5
  videoFileNamingAlgorithm
  parallelTasks
  previewAudio
  previewSegments
  previewSegmentDuration
  previewExcludeStart
  previewExcludeEnd
  previewPreset
  maxTranscodeSize
  maxStreamingTranscodeSize
  writeImageThumbnails
  apiKey
  username
  password
  maxSessionAge
  logFile
  logOut
  logLevel
  logAccess
  createGalleriesFromFolders
  videoExtensions
  imageExtensions
  galleryExtensions
  excludes
  imageExcludes
  customPerformerImageLocation
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  stashBoxes {
    name
    endpoint
    api_key
  }
  pythonPath
}
    `;
export const ConfigInterfaceDataFragmentDoc = gql`
    fragment ConfigInterfaceData on ConfigInterfaceResult {
  menuItems
  soundOnPreview
  wallShowTitle
  wallPlayback
  showScrubber
  maximumLoopDuration
  noBrowser
  notificationsEnabled
  autostartVideo
  autostartVideoOnPlaySelected
  continuePlaylistDefault
  showStudioAsText
  css
  cssEnabled
  language
  imageLightbox {
    slideshowDelay
    displayMode
    scaleUp
    resetZoomOnNav
    scrollMode
  }
  disableDropdownCreate {
    performer
    tag
    studio
  }
  handyKey
  funscriptOffset
}
    `;
export const ConfigDlnaDataFragmentDoc = gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  whitelistedIPs
  interfaces
}
    `;
export const ConfigScrapingDataFragmentDoc = gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `;
export const ScraperSourceDataFragmentDoc = gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `;
export const IdentifyFieldOptionsDataFragmentDoc = gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `;
export const IdentifyMetadataOptionsDataFragmentDoc = gql`
    fragment IdentifyMetadataOptionsData on IdentifyMetadataOptions {
  fieldOptions {
    ...IdentifyFieldOptionsData
  }
  setCoverImage
  setOrganized
  includeMalePerformers
}
    ${IdentifyFieldOptionsDataFragmentDoc}`;
export const ConfigDefaultSettingsDataFragmentDoc = gql`
    fragment ConfigDefaultSettingsData on ConfigDefaultSettingsResult {
  scan {
    useFileMetadata
    stripFileExtension
    scanGeneratePreviews
    scanGenerateImagePreviews
    scanGenerateSprites
    scanGeneratePhashes
    scanGenerateThumbnails
  }
  identify {
    sources {
      source {
        ...ScraperSourceData
      }
      options {
        ...IdentifyMetadataOptionsData
      }
    }
    options {
      ...IdentifyMetadataOptionsData
    }
  }
  autoTag {
    performers
    studios
    tags
  }
  generate {
    sprites
    previews
    imagePreviews
    previewOptions {
      previewSegments
      previewSegmentDuration
      previewExcludeStart
      previewExcludeEnd
      previewPreset
    }
    markers
    markerImagePreviews
    markerScreenshots
    transcodes
    phashes
    interactiveHeatmapsSpeeds
  }
  deleteFile
  deleteGenerated
}
    ${ScraperSourceDataFragmentDoc}
${IdentifyMetadataOptionsDataFragmentDoc}`;
export const ConfigDataFragmentDoc = gql`
    fragment ConfigData on ConfigResult {
  general {
    ...ConfigGeneralData
  }
  interface {
    ...ConfigInterfaceData
  }
  dlna {
    ...ConfigDLNAData
  }
  scraping {
    ...ConfigScrapingData
  }
  defaults {
    ...ConfigDefaultSettingsData
  }
}
    ${ConfigGeneralDataFragmentDoc}
${ConfigInterfaceDataFragmentDoc}
${ConfigDlnaDataFragmentDoc}
${ConfigScrapingDataFragmentDoc}
${ConfigDefaultSettingsDataFragmentDoc}`;
export const SavedFilterDataFragmentDoc = gql`
    fragment SavedFilterData on SavedFilter {
  id
  mode
  name
  filter
}
    `;
export const SlimImageDataFragmentDoc = gql`
    fragment SlimImageData on Image {
  id
  checksum
  title
  rating
  organized
  o_counter
  path
  file {
    size
    width
    height
  }
  paths {
    thumbnail
    image
  }
  galleries {
    id
    path
    title
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
}
    `;
export const SlimStudioDataFragmentDoc = gql`
    fragment SlimStudioData on Studio {
  id
  name
  image_path
  stash_ids {
    endpoint
    stash_id
  }
  parent_studio {
    id
  }
  details
  rating
  aliases
}
    `;
export const SlimTagDataFragmentDoc = gql`
    fragment SlimTagData on Tag {
  id
  name
  aliases
  image_path
}
    `;
export const PerformerDataFragmentDoc = gql`
    fragment PerformerData on Performer {
  id
  checksum
  name
  url
  gender
  twitter
  instagram
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  career_length
  tattoos
  piercings
  aliases
  favorite
  ignore_auto_tag
  image_path
  scene_count
  image_count
  gallery_count
  movie_count
  tags {
    ...SlimTagData
  }
  stash_ids {
    stash_id
    endpoint
  }
  rating
  details
  death_date
  hair_color
  weight
}
    ${SlimTagDataFragmentDoc}`;
export const SlimSceneDataFragmentDoc = gql`
    fragment SlimSceneData on Scene {
  id
  checksum
  oshash
  title
  details
  url
  date
  rating
  o_counter
  organized
  path
  phash
  interactive
  interactive_speed
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    chapters_vtt
    sprite
    funscript
    interactive_heatmap
  }
  scene_markers {
    id
    title
    seconds
  }
  galleries {
    id
    path
    title
  }
  studio {
    id
    name
    image_path
  }
  movies {
    movie {
      id
      name
      front_image_path
    }
    scene_index
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  stash_ids {
    endpoint
    stash_id
  }
}
    `;
export const GalleryDataFragmentDoc = gql`
    fragment GalleryData on Gallery {
  id
  checksum
  path
  created_at
  updated_at
  title
  date
  url
  details
  rating
  organized
  images {
    ...SlimImageData
  }
  cover {
    ...SlimImageData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  scenes {
    ...SlimSceneData
  }
}
    ${SlimImageDataFragmentDoc}
${SlimStudioDataFragmentDoc}
${SlimTagDataFragmentDoc}
${PerformerDataFragmentDoc}
${SlimSceneDataFragmentDoc}`;
export const ImageDataFragmentDoc = gql`
    fragment ImageData on Image {
  id
  checksum
  title
  rating
  organized
  o_counter
  path
  created_at
  updated_at
  file {
    size
    width
    height
  }
  paths {
    thumbnail
    image
  }
  galleries {
    ...GalleryData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
}
    ${GalleryDataFragmentDoc}
${SlimStudioDataFragmentDoc}
${SlimTagDataFragmentDoc}
${PerformerDataFragmentDoc}`;
export const JobDataFragmentDoc = gql`
    fragment JobData on Job {
  id
  status
  subTasks
  description
  progress
  startTime
  endTime
  addTime
}
    `;
export const LogEntryDataFragmentDoc = gql`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `;
export const SlimMovieDataFragmentDoc = gql`
    fragment SlimMovieData on Movie {
  id
  name
  front_image_path
}
    `;
export const SlimPerformerDataFragmentDoc = gql`
    fragment SlimPerformerData on Performer {
  id
  name
  gender
  url
  twitter
  instagram
  image_path
  favorite
  ignore_auto_tag
  country
  birthdate
  ethnicity
  hair_color
  eye_color
  height
  fake_tits
  career_length
  tattoos
  piercings
  tags {
    id
    name
  }
  stash_ids {
    endpoint
    stash_id
  }
  rating
  death_date
  weight
}
    `;
export const SceneMarkerDataFragmentDoc = gql`
    fragment SceneMarkerData on SceneMarker {
  id
  title
  seconds
  stream
  preview
  screenshot
  scene {
    id
  }
  primary_tag {
    id
    name
    aliases
  }
  tags {
    id
    name
    aliases
  }
}
    `;
export const SlimGalleryDataFragmentDoc = gql`
    fragment SlimGalleryData on Gallery {
  id
  checksum
  path
  title
  date
  url
  details
  rating
  organized
  image_count
  cover {
    file {
      size
      width
      height
    }
    paths {
      thumbnail
    }
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  scenes {
    id
    title
    path
  }
}
    `;
export const MovieDataFragmentDoc = gql`
    fragment MovieData on Movie {
  id
  checksum
  name
  aliases
  duration
  date
  rating
  director
  studio {
    ...SlimStudioData
  }
  synopsis
  url
  front_image_path
  back_image_path
  scene_count
  scenes {
    id
    title
    path
  }
}
    ${SlimStudioDataFragmentDoc}`;
export const SceneDataFragmentDoc = gql`
    fragment SceneData on Scene {
  id
  checksum
  oshash
  title
  details
  url
  date
  rating
  o_counter
  organized
  path
  phash
  interactive
  interactive_speed
  created_at
  updated_at
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    chapters_vtt
    sprite
    funscript
    interactive_heatmap
  }
  scene_markers {
    ...SceneMarkerData
  }
  galleries {
    ...SlimGalleryData
  }
  studio {
    ...SlimStudioData
  }
  movies {
    movie {
      ...MovieData
    }
    scene_index
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  stash_ids {
    endpoint
    stash_id
  }
  sceneStreams {
    url
    mime_type
    label
  }
}
    ${SceneMarkerDataFragmentDoc}
${SlimGalleryDataFragmentDoc}
${SlimStudioDataFragmentDoc}
${MovieDataFragmentDoc}
${SlimTagDataFragmentDoc}
${PerformerDataFragmentDoc}`;
export const ScrapedSceneTagDataFragmentDoc = gql`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
}
    `;
export const ScrapedPerformerDataFragmentDoc = gql`
    fragment ScrapedPerformerData on ScrapedPerformer {
  stored_id
  name
  gender
  url
  twitter
  instagram
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  career_length
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  images
  details
  death_date
  hair_color
  weight
  remote_site_id
}
    ${ScrapedSceneTagDataFragmentDoc}`;
export const ScrapedMovieStudioDataFragmentDoc = gql`
    fragment ScrapedMovieStudioData on ScrapedStudio {
  stored_id
  name
  url
}
    `;
export const ScrapedMovieDataFragmentDoc = gql`
    fragment ScrapedMovieData on ScrapedMovie {
  name
  aliases
  duration
  date
  rating
  director
  url
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedMovieStudioData
  }
}
    ${ScrapedMovieStudioDataFragmentDoc}`;
export const ScrapedSceneStudioDataFragmentDoc = gql`
    fragment ScrapedSceneStudioData on ScrapedStudio {
  stored_id
  name
  url
  remote_site_id
}
    `;
export const ScrapedScenePerformerDataFragmentDoc = gql`
    fragment ScrapedScenePerformerData on ScrapedPerformer {
  stored_id
  name
  gender
  url
  twitter
  instagram
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  career_length
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
  images
  details
  death_date
  hair_color
  weight
}
    ${ScrapedSceneTagDataFragmentDoc}`;
export const ScrapedSceneMovieDataFragmentDoc = gql`
    fragment ScrapedSceneMovieData on ScrapedMovie {
  stored_id
  name
  aliases
  duration
  date
  rating
  director
  url
  synopsis
}
    `;
export const ScrapedSceneDataFragmentDoc = gql`
    fragment ScrapedSceneData on ScrapedScene {
  title
  details
  url
  date
  image
  remote_site_id
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  movies {
    ...ScrapedSceneMovieData
  }
  fingerprints {
    hash
    algorithm
    duration
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}
${ScrapedSceneMovieDataFragmentDoc}`;
export const ScrapedGalleryDataFragmentDoc = gql`
    fragment ScrapedGalleryData on ScrapedGallery {
  title
  details
  url
  date
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}`;
export const ScrapedStashBoxSceneDataFragmentDoc = gql`
    fragment ScrapedStashBoxSceneData on ScrapedScene {
  title
  details
  url
  date
  image
  remote_site_id
  duration
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  fingerprints {
    hash
    algorithm
    duration
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  movies {
    ...ScrapedSceneMovieData
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}
${ScrapedSceneMovieDataFragmentDoc}`;
export const ScrapedStashBoxPerformerDataFragmentDoc = gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${ScrapedScenePerformerDataFragmentDoc}`;
export const StudioDataFragmentDoc = gql`
    fragment StudioData on Studio {
  id
  checksum
  name
  url
  parent_studio {
    id
    name
    url
    image_path
  }
  child_studios {
    id
    name
    image_path
  }
  ignore_auto_tag
  image_path
  scene_count
  image_count
  gallery_count
  movie_count
  stash_ids {
    stash_id
    endpoint
  }
  details
  rating
  aliases
}
    `;
export const TagDataFragmentDoc = gql`
    fragment TagData on Tag {
  id
  name
  aliases
  ignore_auto_tag
  image_path
  scene_count
  scene_marker_count
  image_count
  gallery_count
  performer_count
  parents {
    ...SlimTagData
  }
  children {
    ...SlimTagData
  }
}
    ${SlimTagDataFragmentDoc}`;
export const SetupDocument = gql`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetupGQL extends Apollo.Mutation<SetupMutation, SetupMutationVariables> {
    override document = SetupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MigrateDocument = gql`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MigrateGQL extends Apollo.Mutation<MigrateMutation, MigrateMutationVariables> {
    override document = MigrateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ConfigureGeneralDocument = gql`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${ConfigGeneralDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ConfigureGeneralGQL extends Apollo.Mutation<ConfigureGeneralMutation, ConfigureGeneralMutationVariables> {
    override document = ConfigureGeneralDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ConfigureInterfaceDocument = gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${ConfigInterfaceDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ConfigureInterfaceGQL extends Apollo.Mutation<ConfigureInterfaceMutation, ConfigureInterfaceMutationVariables> {
    override document = ConfigureInterfaceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ConfigureDlnaDocument = gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${ConfigDlnaDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ConfigureDlnaGQL extends Apollo.Mutation<ConfigureDlnaMutation, ConfigureDlnaMutationVariables> {
    override document = ConfigureDlnaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ConfigureScrapingDocument = gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${ConfigScrapingDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ConfigureScrapingGQL extends Apollo.Mutation<ConfigureScrapingMutation, ConfigureScrapingMutationVariables> {
    override document = ConfigureScrapingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ConfigureDefaultsDocument = gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${ConfigDefaultSettingsDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ConfigureDefaultsGQL extends Apollo.Mutation<ConfigureDefaultsMutation, ConfigureDefaultsMutationVariables> {
    override document = ConfigureDefaultsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GenerateApiKeyDocument = gql`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GenerateApiKeyGQL extends Apollo.Mutation<GenerateApiKeyMutation, GenerateApiKeyMutationVariables> {
    override document = GenerateApiKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EnableDlnaDocument = gql`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EnableDlnaGQL extends Apollo.Mutation<EnableDlnaMutation, EnableDlnaMutationVariables> {
    override document = EnableDlnaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DisableDlnaDocument = gql`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DisableDlnaGQL extends Apollo.Mutation<DisableDlnaMutation, DisableDlnaMutationVariables> {
    override document = DisableDlnaDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddTempDlnaipDocument = gql`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddTempDlnaipGQL extends Apollo.Mutation<AddTempDlnaipMutation, AddTempDlnaipMutationVariables> {
    override document = AddTempDlnaipDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveTempDlnaipDocument = gql`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveTempDlnaipGQL extends Apollo.Mutation<RemoveTempDlnaipMutation, RemoveTempDlnaipMutationVariables> {
    override document = RemoveTempDlnaipDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SaveFilterDocument = gql`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SaveFilterGQL extends Apollo.Mutation<SaveFilterMutation, SaveFilterMutationVariables> {
    override document = SaveFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DestroySavedFilterDocument = gql`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DestroySavedFilterGQL extends Apollo.Mutation<DestroySavedFilterMutation, DestroySavedFilterMutationVariables> {
    override document = DestroySavedFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetDefaultFilterDocument = gql`
    mutation SetDefaultFilter($input: SetDefaultFilterInput!) {
  setDefaultFilter(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetDefaultFilterGQL extends Apollo.Mutation<SetDefaultFilterMutation, SetDefaultFilterMutationVariables> {
    override document = SetDefaultFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GalleryCreateDocument = gql`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GalleryCreateGQL extends Apollo.Mutation<GalleryCreateMutation, GalleryCreateMutationVariables> {
    override document = GalleryCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GalleryUpdateDocument = gql`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GalleryUpdateGQL extends Apollo.Mutation<GalleryUpdateMutation, GalleryUpdateMutationVariables> {
    override document = GalleryUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BulkGalleryUpdateDocument = gql`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BulkGalleryUpdateGQL extends Apollo.Mutation<BulkGalleryUpdateMutation, BulkGalleryUpdateMutationVariables> {
    override document = BulkGalleryUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GalleriesUpdateDocument = gql`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GalleriesUpdateGQL extends Apollo.Mutation<GalleriesUpdateMutation, GalleriesUpdateMutationVariables> {
    override document = GalleriesUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GalleryDestroyDocument = gql`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GalleryDestroyGQL extends Apollo.Mutation<GalleryDestroyMutation, GalleryDestroyMutationVariables> {
    override document = GalleryDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddGalleryImagesDocument = gql`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddGalleryImagesGQL extends Apollo.Mutation<AddGalleryImagesMutation, AddGalleryImagesMutationVariables> {
    override document = AddGalleryImagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RemoveGalleryImagesDocument = gql`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveGalleryImagesGQL extends Apollo.Mutation<RemoveGalleryImagesMutation, RemoveGalleryImagesMutationVariables> {
    override document = RemoveGalleryImagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ImageUpdateDocument = gql`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${SlimImageDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ImageUpdateGQL extends Apollo.Mutation<ImageUpdateMutation, ImageUpdateMutationVariables> {
    override document = ImageUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BulkImageUpdateDocument = gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${SlimImageDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BulkImageUpdateGQL extends Apollo.Mutation<BulkImageUpdateMutation, BulkImageUpdateMutationVariables> {
    override document = BulkImageUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ImagesUpdateDocument = gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${SlimImageDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ImagesUpdateGQL extends Apollo.Mutation<ImagesUpdateMutation, ImagesUpdateMutationVariables> {
    override document = ImagesUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ImageIncrementODocument = gql`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ImageIncrementOGQL extends Apollo.Mutation<ImageIncrementOMutation, ImageIncrementOMutationVariables> {
    override document = ImageIncrementODocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ImageDecrementODocument = gql`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ImageDecrementOGQL extends Apollo.Mutation<ImageDecrementOMutation, ImageDecrementOMutationVariables> {
    override document = ImageDecrementODocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ImageResetODocument = gql`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ImageResetOGQL extends Apollo.Mutation<ImageResetOMutation, ImageResetOMutationVariables> {
    override document = ImageResetODocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ImageDestroyDocument = gql`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ImageDestroyGQL extends Apollo.Mutation<ImageDestroyMutation, ImageDestroyMutationVariables> {
    override document = ImageDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ImagesDestroyDocument = gql`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ImagesDestroyGQL extends Apollo.Mutation<ImagesDestroyMutation, ImagesDestroyMutationVariables> {
    override document = ImagesDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StopJobDocument = gql`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StopJobGQL extends Apollo.Mutation<StopJobMutation, StopJobMutationVariables> {
    override document = StopJobDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StopAllJobsDocument = gql`
    mutation StopAllJobs {
  stopAllJobs
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StopAllJobsGQL extends Apollo.Mutation<StopAllJobsMutation, StopAllJobsMutationVariables> {
    override document = StopAllJobsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MetadataImportDocument = gql`
    mutation MetadataImport {
  metadataImport
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MetadataImportGQL extends Apollo.Mutation<MetadataImportMutation, MetadataImportMutationVariables> {
    override document = MetadataImportDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MetadataExportDocument = gql`
    mutation MetadataExport {
  metadataExport
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MetadataExportGQL extends Apollo.Mutation<MetadataExportMutation, MetadataExportMutationVariables> {
    override document = MetadataExportDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ExportObjectsDocument = gql`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExportObjectsGQL extends Apollo.Mutation<ExportObjectsMutation, ExportObjectsMutationVariables> {
    override document = ExportObjectsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ImportObjectsDocument = gql`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ImportObjectsGQL extends Apollo.Mutation<ImportObjectsMutation, ImportObjectsMutationVariables> {
    override document = ImportObjectsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MetadataScanDocument = gql`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MetadataScanGQL extends Apollo.Mutation<MetadataScanMutation, MetadataScanMutationVariables> {
    override document = MetadataScanDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MetadataGenerateDocument = gql`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MetadataGenerateGQL extends Apollo.Mutation<MetadataGenerateMutation, MetadataGenerateMutationVariables> {
    override document = MetadataGenerateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MetadataAutoTagDocument = gql`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MetadataAutoTagGQL extends Apollo.Mutation<MetadataAutoTagMutation, MetadataAutoTagMutationVariables> {
    override document = MetadataAutoTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MetadataIdentifyDocument = gql`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MetadataIdentifyGQL extends Apollo.Mutation<MetadataIdentifyMutation, MetadataIdentifyMutationVariables> {
    override document = MetadataIdentifyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MetadataCleanDocument = gql`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MetadataCleanGQL extends Apollo.Mutation<MetadataCleanMutation, MetadataCleanMutationVariables> {
    override document = MetadataCleanDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MigrateHashNamingDocument = gql`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MigrateHashNamingGQL extends Apollo.Mutation<MigrateHashNamingMutation, MigrateHashNamingMutationVariables> {
    override document = MigrateHashNamingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BackupDatabaseDocument = gql`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BackupDatabaseGQL extends Apollo.Mutation<BackupDatabaseMutation, BackupDatabaseMutationVariables> {
    override document = BackupDatabaseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MovieCreateDocument = gql`
    mutation MovieCreate($name: String!, $aliases: String, $duration: Int, $date: String, $rating: Int, $studio_id: ID, $director: String, $synopsis: String, $url: String, $front_image: String, $back_image: String) {
  movieCreate(
    input: {name: $name, aliases: $aliases, duration: $duration, date: $date, rating: $rating, studio_id: $studio_id, director: $director, synopsis: $synopsis, url: $url, front_image: $front_image, back_image: $back_image}
  ) {
    ...MovieData
  }
}
    ${MovieDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MovieCreateGQL extends Apollo.Mutation<MovieCreateMutation, MovieCreateMutationVariables> {
    override document = MovieCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MovieUpdateDocument = gql`
    mutation MovieUpdate($input: MovieUpdateInput!) {
  movieUpdate(input: $input) {
    ...MovieData
  }
}
    ${MovieDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MovieUpdateGQL extends Apollo.Mutation<MovieUpdateMutation, MovieUpdateMutationVariables> {
    override document = MovieUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BulkMovieUpdateDocument = gql`
    mutation BulkMovieUpdate($input: BulkMovieUpdateInput!) {
  bulkMovieUpdate(input: $input) {
    ...MovieData
  }
}
    ${MovieDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BulkMovieUpdateGQL extends Apollo.Mutation<BulkMovieUpdateMutation, BulkMovieUpdateMutationVariables> {
    override document = BulkMovieUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MovieDestroyDocument = gql`
    mutation MovieDestroy($id: ID!) {
  movieDestroy(input: {id: $id})
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MovieDestroyGQL extends Apollo.Mutation<MovieDestroyMutation, MovieDestroyMutationVariables> {
    override document = MovieDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MoviesDestroyDocument = gql`
    mutation MoviesDestroy($ids: [ID!]!) {
  moviesDestroy(ids: $ids)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MoviesDestroyGQL extends Apollo.Mutation<MoviesDestroyMutation, MoviesDestroyMutationVariables> {
    override document = MoviesDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PerformerCreateDocument = gql`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PerformerCreateGQL extends Apollo.Mutation<PerformerCreateMutation, PerformerCreateMutationVariables> {
    override document = PerformerCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PerformerUpdateDocument = gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PerformerUpdateGQL extends Apollo.Mutation<PerformerUpdateMutation, PerformerUpdateMutationVariables> {
    override document = PerformerUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BulkPerformerUpdateDocument = gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BulkPerformerUpdateGQL extends Apollo.Mutation<BulkPerformerUpdateMutation, BulkPerformerUpdateMutationVariables> {
    override document = BulkPerformerUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PerformerDestroyDocument = gql`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PerformerDestroyGQL extends Apollo.Mutation<PerformerDestroyMutation, PerformerDestroyMutationVariables> {
    override document = PerformerDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PerformersDestroyDocument = gql`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PerformersDestroyGQL extends Apollo.Mutation<PerformersDestroyMutation, PerformersDestroyMutationVariables> {
    override document = PerformersDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReloadPluginsDocument = gql`
    mutation ReloadPlugins {
  reloadPlugins
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReloadPluginsGQL extends Apollo.Mutation<ReloadPluginsMutation, ReloadPluginsMutationVariables> {
    override document = ReloadPluginsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RunPluginTaskDocument = gql`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args: [PluginArgInput!]) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args: $args)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RunPluginTaskGQL extends Apollo.Mutation<RunPluginTaskMutation, RunPluginTaskMutationVariables> {
    override document = RunPluginTaskDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneMarkerCreateDocument = gql`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneMarkerCreateGQL extends Apollo.Mutation<SceneMarkerCreateMutation, SceneMarkerCreateMutationVariables> {
    override document = SceneMarkerCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneMarkerUpdateDocument = gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneMarkerUpdateGQL extends Apollo.Mutation<SceneMarkerUpdateMutation, SceneMarkerUpdateMutationVariables> {
    override document = SceneMarkerUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneMarkerDestroyDocument = gql`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneMarkerDestroyGQL extends Apollo.Mutation<SceneMarkerDestroyMutation, SceneMarkerDestroyMutationVariables> {
    override document = SceneMarkerDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneUpdateDocument = gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneUpdateGQL extends Apollo.Mutation<SceneUpdateMutation, SceneUpdateMutationVariables> {
    override document = SceneUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BulkSceneUpdateDocument = gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BulkSceneUpdateGQL extends Apollo.Mutation<BulkSceneUpdateMutation, BulkSceneUpdateMutationVariables> {
    override document = BulkSceneUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScenesUpdateDocument = gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScenesUpdateGQL extends Apollo.Mutation<ScenesUpdateMutation, ScenesUpdateMutationVariables> {
    override document = ScenesUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneIncrementODocument = gql`
    mutation SceneIncrementO($id: ID!) {
  sceneIncrementO(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneIncrementOGQL extends Apollo.Mutation<SceneIncrementOMutation, SceneIncrementOMutationVariables> {
    override document = SceneIncrementODocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneDecrementODocument = gql`
    mutation SceneDecrementO($id: ID!) {
  sceneDecrementO(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneDecrementOGQL extends Apollo.Mutation<SceneDecrementOMutation, SceneDecrementOMutationVariables> {
    override document = SceneDecrementODocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneResetODocument = gql`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneResetOGQL extends Apollo.Mutation<SceneResetOMutation, SceneResetOMutationVariables> {
    override document = SceneResetODocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneDestroyDocument = gql`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneDestroyGQL extends Apollo.Mutation<SceneDestroyMutation, SceneDestroyMutationVariables> {
    override document = SceneDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScenesDestroyDocument = gql`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ScenesDestroyGQL extends Apollo.Mutation<ScenesDestroyMutation, ScenesDestroyMutationVariables> {
    override document = ScenesDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneGenerateScreenshotDocument = gql`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneGenerateScreenshotGQL extends Apollo.Mutation<SceneGenerateScreenshotMutation, SceneGenerateScreenshotMutationVariables> {
    override document = SceneGenerateScreenshotDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ReloadScrapersDocument = gql`
    mutation ReloadScrapers {
  reloadScrapers
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ReloadScrapersGQL extends Apollo.Mutation<ReloadScrapersMutation, ReloadScrapersMutationVariables> {
    override document = ReloadScrapersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SubmitStashBoxFingerprintsDocument = gql`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitStashBoxFingerprintsGQL extends Apollo.Mutation<SubmitStashBoxFingerprintsMutation, SubmitStashBoxFingerprintsMutationVariables> {
    override document = SubmitStashBoxFingerprintsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StashBoxBatchPerformerTagDocument = gql`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchPerformerTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StashBoxBatchPerformerTagGQL extends Apollo.Mutation<StashBoxBatchPerformerTagMutation, StashBoxBatchPerformerTagMutationVariables> {
    override document = StashBoxBatchPerformerTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SubmitStashBoxSceneDraftDocument = gql`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitStashBoxSceneDraftGQL extends Apollo.Mutation<SubmitStashBoxSceneDraftMutation, SubmitStashBoxSceneDraftMutationVariables> {
    override document = SubmitStashBoxSceneDraftDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SubmitStashBoxPerformerDraftDocument = gql`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitStashBoxPerformerDraftGQL extends Apollo.Mutation<SubmitStashBoxPerformerDraftMutation, SubmitStashBoxPerformerDraftMutationVariables> {
    override document = SubmitStashBoxPerformerDraftDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StudioCreateDocument = gql`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class StudioCreateGQL extends Apollo.Mutation<StudioCreateMutation, StudioCreateMutationVariables> {
    override document = StudioCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StudioUpdateDocument = gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class StudioUpdateGQL extends Apollo.Mutation<StudioUpdateMutation, StudioUpdateMutationVariables> {
    override document = StudioUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StudioDestroyDocument = gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StudioDestroyGQL extends Apollo.Mutation<StudioDestroyMutation, StudioDestroyMutationVariables> {
    override document = StudioDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StudiosDestroyDocument = gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StudiosDestroyGQL extends Apollo.Mutation<StudiosDestroyMutation, StudiosDestroyMutationVariables> {
    override document = StudiosDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TagCreateDocument = gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TagCreateGQL extends Apollo.Mutation<TagCreateMutation, TagCreateMutationVariables> {
    override document = TagCreateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TagDestroyDocument = gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TagDestroyGQL extends Apollo.Mutation<TagDestroyMutation, TagDestroyMutationVariables> {
    override document = TagDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TagsDestroyDocument = gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TagsDestroyGQL extends Apollo.Mutation<TagsDestroyMutation, TagsDestroyMutationVariables> {
    override document = TagsDestroyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TagUpdateDocument = gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TagUpdateGQL extends Apollo.Mutation<TagUpdateMutation, TagUpdateMutationVariables> {
    override document = TagUpdateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TagsMergeDocument = gql`
    mutation TagsMerge($source: [ID!]!, $destination: ID!) {
  tagsMerge(input: {source: $source, destination: $destination}) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TagsMergeGQL extends Apollo.Mutation<TagsMergeMutation, TagsMergeMutationVariables> {
    override document = TagsMergeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DlnaStatusDocument = gql`
    query DLNAStatus {
  dlnaStatus {
    running
    until
    recentIPAddresses
    allowedIPAddresses {
      ipAddress
      until
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DlnaStatusGQL extends Apollo.Query<DlnaStatusQuery, DlnaStatusQueryVariables> {
    override document = DlnaStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindSavedFiltersDocument = gql`
    query FindSavedFilters($mode: FilterMode!) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindSavedFiltersGQL extends Apollo.Query<FindSavedFiltersQuery, FindSavedFiltersQueryVariables> {
    override document = FindSavedFiltersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindDefaultFilterDocument = gql`
    query FindDefaultFilter($mode: FilterMode!) {
  findDefaultFilter(mode: $mode) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindDefaultFilterGQL extends Apollo.Query<FindDefaultFilterQuery, FindDefaultFilterQueryVariables> {
    override document = FindDefaultFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindGalleriesDocument = gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${SlimGalleryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindGalleriesGQL extends Apollo.Query<FindGalleriesQuery, FindGalleriesQueryVariables> {
    override document = FindGalleriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindGalleryDocument = gql`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindGalleryGQL extends Apollo.Query<FindGalleryQuery, FindGalleryQueryVariables> {
    override document = FindGalleryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindImagesDocument = gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    megapixels
    filesize
    images {
      ...SlimImageData
    }
  }
}
    ${SlimImageDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindImagesGQL extends Apollo.Query<FindImagesQuery, FindImagesQueryVariables> {
    override document = FindImagesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindImageDocument = gql`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${ImageDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindImageGQL extends Apollo.Query<FindImageQuery, FindImageQueryVariables> {
    override document = FindImageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const JobQueueDocument = gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${JobDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class JobQueueGQL extends Apollo.Query<JobQueueQuery, JobQueueQueryVariables> {
    override document = JobQueueDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindJobDocument = gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${JobDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindJobGQL extends Apollo.Query<FindJobQuery, FindJobQueryVariables> {
    override document = FindJobDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneWallDocument = gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneWallGQL extends Apollo.Query<SceneWallQuery, SceneWallQueryVariables> {
    override document = SceneWallDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MarkerWallDocument = gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MarkerWallGQL extends Apollo.Query<MarkerWallQuery, MarkerWallQueryVariables> {
    override document = MarkerWallDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MarkerStringsDocument = gql`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MarkerStringsGQL extends Apollo.Query<MarkerStringsQuery, MarkerStringsQueryVariables> {
    override document = MarkerStringsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllTagsDocument = gql`
    query AllTags {
  allTags {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AllTagsGQL extends Apollo.Query<AllTagsQuery, AllTagsQueryVariables> {
    override document = AllTagsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllPerformersForFilterDocument = gql`
    query AllPerformersForFilter {
  allPerformers {
    ...SlimPerformerData
  }
}
    ${SlimPerformerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AllPerformersForFilterGQL extends Apollo.Query<AllPerformersForFilterQuery, AllPerformersForFilterQueryVariables> {
    override document = AllPerformersForFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllStudiosForFilterDocument = gql`
    query AllStudiosForFilter {
  allStudios {
    ...SlimStudioData
  }
}
    ${SlimStudioDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AllStudiosForFilterGQL extends Apollo.Query<AllStudiosForFilterQuery, AllStudiosForFilterQueryVariables> {
    override document = AllStudiosForFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllMoviesForFilterDocument = gql`
    query AllMoviesForFilter {
  allMovies {
    ...SlimMovieData
  }
}
    ${SlimMovieDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AllMoviesForFilterGQL extends Apollo.Query<AllMoviesForFilterQuery, AllMoviesForFilterQueryVariables> {
    override document = AllMoviesForFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllTagsForFilterDocument = gql`
    query AllTagsForFilter {
  allTags {
    id
    name
    aliases
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllTagsForFilterGQL extends Apollo.Query<AllTagsForFilterQuery, AllTagsForFilterQueryVariables> {
    override document = AllTagsForFilterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const StatsDocument = gql`
    query Stats {
  stats {
    scene_count
    scenes_size
    scenes_duration
    image_count
    images_size
    gallery_count
    performer_count
    studio_count
    movie_count
    tag_count
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StatsGQL extends Apollo.Query<StatsQuery, StatsQueryVariables> {
    override document = StatsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LogsDocument = gql`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${LogEntryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LogsGQL extends Apollo.Query<LogsQuery, LogsQueryVariables> {
    override document = LogsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VersionDocument = gql`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VersionGQL extends Apollo.Query<VersionQuery, VersionQueryVariables> {
    override document = VersionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LatestVersionDocument = gql`
    query LatestVersion {
  latestversion {
    shorthash
    url
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LatestVersionGQL extends Apollo.Query<LatestVersionQuery, LatestVersionQueryVariables> {
    override document = LatestVersionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindMoviesDocument = gql`
    query FindMovies($filter: FindFilterType, $movie_filter: MovieFilterType) {
  findMovies(filter: $filter, movie_filter: $movie_filter) {
    count
    movies {
      ...MovieData
    }
  }
}
    ${MovieDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindMoviesGQL extends Apollo.Query<FindMoviesQuery, FindMoviesQueryVariables> {
    override document = FindMoviesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindMovieDocument = gql`
    query FindMovie($id: ID!) {
  findMovie(id: $id) {
    ...MovieData
  }
}
    ${MovieDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindMovieGQL extends Apollo.Query<FindMovieQuery, FindMovieQueryVariables> {
    override document = FindMovieDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindPerformersDocument = gql`
    query FindPerformers($filter: FindFilterType, $performer_filter: PerformerFilterType) {
  findPerformers(filter: $filter, performer_filter: $performer_filter) {
    count
    performers {
      ...PerformerData
    }
  }
}
    ${PerformerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindPerformersGQL extends Apollo.Query<FindPerformersQuery, FindPerformersQueryVariables> {
    override document = FindPerformersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindPerformerDocument = gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindPerformerGQL extends Apollo.Query<FindPerformerQuery, FindPerformerQueryVariables> {
    override document = FindPerformerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PluginsDocument = gql`
    query Plugins {
  plugins {
    id
    name
    description
    url
    version
    tasks {
      name
      description
    }
    hooks {
      name
      description
      hooks
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PluginsGQL extends Apollo.Query<PluginsQuery, PluginsQueryVariables> {
    override document = PluginsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PluginTasksDocument = gql`
    query PluginTasks {
  pluginTasks {
    name
    description
    plugin {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PluginTasksGQL extends Apollo.Query<PluginTasksQuery, PluginTasksQueryVariables> {
    override document = PluginTasksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindSceneMarkersDocument = gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${SceneMarkerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindSceneMarkersGQL extends Apollo.Query<FindSceneMarkersQuery, FindSceneMarkersQueryVariables> {
    override document = FindSceneMarkersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindScenesDocument = gql`
    query FindScenes($filter: FindFilterType, $scene_filter: SceneFilterType, $scene_ids: [Int!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, scene_ids: $scene_ids) {
    count
    filesize
    duration
    scenes {
      ...SceneData
    }
  }
}
    ${SceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindScenesGQL extends Apollo.Query<FindScenesQuery, FindScenesQueryVariables> {
    override document = FindScenesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindScenesByPathRegexDocument = gql`
    query FindScenesByPathRegex($filter: FindFilterType) {
  findScenesByPathRegex(filter: $filter) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${SlimSceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindScenesByPathRegexGQL extends Apollo.Query<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables> {
    override document = FindScenesByPathRegexDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindDuplicateScenesDocument = gql`
    query FindDuplicateScenes($distance: Int) {
  findDuplicateScenes(distance: $distance) {
    ...SlimSceneData
  }
}
    ${SlimSceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindDuplicateScenesGQL extends Apollo.Query<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables> {
    override document = FindDuplicateScenesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindSceneDocument = gql`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindSceneGQL extends Apollo.Query<FindSceneQuery, FindSceneQueryVariables> {
    override document = FindSceneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindSceneMarkerTagsDocument = gql`
    query FindSceneMarkerTags($id: ID!) {
  sceneMarkerTags(scene_id: $id) {
    tag {
      id
      name
    }
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${SceneMarkerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindSceneMarkerTagsGQL extends Apollo.Query<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables> {
    override document = FindSceneMarkerTagsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ParseSceneFilenamesDocument = gql`
    query ParseSceneFilenames($filter: FindFilterType!, $config: SceneParserInput!) {
  parseSceneFilenames(filter: $filter, config: $config) {
    count
    results {
      scene {
        ...SlimSceneData
      }
      title
      details
      url
      date
      rating
      studio_id
      gallery_ids
      movies {
        movie_id
      }
      performer_ids
      tag_ids
    }
  }
}
    ${SlimSceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ParseSceneFilenamesGQL extends Apollo.Query<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables> {
    override document = ParseSceneFilenamesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SceneStreamsDocument = gql`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SceneStreamsGQL extends Apollo.Query<SceneStreamsQuery, SceneStreamsQueryVariables> {
    override document = SceneStreamsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapeFreeonesPerformersDocument = gql`
    query ScrapeFreeonesPerformers($q: String!) {
  scrapeFreeonesPerformerList(query: $q)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapeFreeonesPerformersGQL extends Apollo.Query<ScrapeFreeonesPerformersQuery, ScrapeFreeonesPerformersQueryVariables> {
    override document = ScrapeFreeonesPerformersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListPerformerScrapersDocument = gql`
    query ListPerformerScrapers {
  listPerformerScrapers {
    id
    name
    performer {
      urls
      supported_scrapes
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListPerformerScrapersGQL extends Apollo.Query<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables> {
    override document = ListPerformerScrapersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListSceneScrapersDocument = gql`
    query ListSceneScrapers {
  listSceneScrapers {
    id
    name
    scene {
      urls
      supported_scrapes
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListSceneScrapersGQL extends Apollo.Query<ListSceneScrapersQuery, ListSceneScrapersQueryVariables> {
    override document = ListSceneScrapersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListGalleryScrapersDocument = gql`
    query ListGalleryScrapers {
  listGalleryScrapers {
    id
    name
    gallery {
      urls
      supported_scrapes
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListGalleryScrapersGQL extends Apollo.Query<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables> {
    override document = ListGalleryScrapersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ListMovieScrapersDocument = gql`
    query ListMovieScrapers {
  listMovieScrapers {
    id
    name
    movie {
      urls
      supported_scrapes
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ListMovieScrapersGQL extends Apollo.Query<ListMovieScrapersQuery, ListMovieScrapersQueryVariables> {
    override document = ListMovieScrapersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapeSinglePerformerDocument = gql`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${ScrapedPerformerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapeSinglePerformerGQL extends Apollo.Query<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables> {
    override document = ScrapeSinglePerformerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapeMultiPerformersDocument = gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${ScrapedPerformerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapeMultiPerformersGQL extends Apollo.Query<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables> {
    override document = ScrapeMultiPerformersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapePerformerUrlDocument = gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${ScrapedPerformerDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapePerformerUrlGQL extends Apollo.Query<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables> {
    override document = ScrapePerformerUrlDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapeSingleSceneDocument = gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ScrapedSceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapeSingleSceneGQL extends Apollo.Query<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables> {
    override document = ScrapeSingleSceneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapeMultiScenesDocument = gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ScrapedSceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapeMultiScenesGQL extends Apollo.Query<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables> {
    override document = ScrapeMultiScenesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapeSceneUrlDocument = gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${ScrapedSceneDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapeSceneUrlGQL extends Apollo.Query<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables> {
    override document = ScrapeSceneUrlDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapeSingleGalleryDocument = gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${ScrapedGalleryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapeSingleGalleryGQL extends Apollo.Query<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables> {
    override document = ScrapeSingleGalleryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapeGalleryUrlDocument = gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${ScrapedGalleryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapeGalleryUrlGQL extends Apollo.Query<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables> {
    override document = ScrapeGalleryUrlDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScrapeMovieUrlDocument = gql`
    query ScrapeMovieURL($url: String!) {
  scrapeMovieURL(url: $url) {
    ...ScrapedMovieData
  }
}
    ${ScrapedMovieDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ScrapeMovieUrlGQL extends Apollo.Query<ScrapeMovieUrlQuery, ScrapeMovieUrlQueryVariables> {
    override document = ScrapeMovieUrlDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ConfigurationDocument = gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${ConfigDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ConfigurationGQL extends Apollo.Query<ConfigurationQuery, ConfigurationQueryVariables> {
    override document = ConfigurationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DirectoryDocument = gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DirectoryGQL extends Apollo.Query<DirectoryQuery, DirectoryQueryVariables> {
    override document = DirectoryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ValidateStashBoxDocument = gql`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ValidateStashBoxGQL extends Apollo.Query<ValidateStashBoxQuery, ValidateStashBoxQueryVariables> {
    override document = ValidateStashBoxDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SystemStatusDocument = gql`
    query SystemStatus {
  systemStatus {
    databaseSchema
    databasePath
    appSchema
    status
    configPath
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SystemStatusGQL extends Apollo.Query<SystemStatusQuery, SystemStatusQueryVariables> {
    override document = SystemStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindStudiosDocument = gql`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${StudioDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindStudiosGQL extends Apollo.Query<FindStudiosQuery, FindStudiosQueryVariables> {
    override document = FindStudiosDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindStudioDocument = gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindStudioGQL extends Apollo.Query<FindStudioQuery, FindStudioQueryVariables> {
    override document = FindStudioDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindTagsDocument = gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagData
    }
  }
}
    ${TagDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindTagsGQL extends Apollo.Query<FindTagsQuery, FindTagsQueryVariables> {
    override document = FindTagsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FindTagDocument = gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FindTagGQL extends Apollo.Query<FindTagQuery, FindTagQueryVariables> {
    override document = FindTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const JobsSubscribeDocument = gql`
    subscription JobsSubscribe {
  jobsSubscribe {
    type
    job {
      id
      status
      subTasks
      description
      progress
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class JobsSubscribeGQL extends Apollo.Subscription<JobsSubscribeSubscription, JobsSubscribeSubscriptionVariables> {
    override document = JobsSubscribeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoggingSubscribeDocument = gql`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${LogEntryDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class LoggingSubscribeGQL extends Apollo.Subscription<LoggingSubscribeSubscription, LoggingSubscribeSubscriptionVariables> {
    override document = LoggingSubscribeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ScanCompleteSubscribeDocument = gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ScanCompleteSubscribeGQL extends Apollo.Subscription<ScanCompleteSubscribeSubscription, ScanCompleteSubscribeSubscriptionVariables> {
    override document = ScanCompleteSubscribeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }