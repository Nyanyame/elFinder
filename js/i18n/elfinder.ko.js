/**
 * Korea-한국어 translation
 * @author Hwang Ahreum; <luckmagic@naver.com>
 * @version 2017-11-10
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['elfinder'], factory);
	} else if (typeof exports !== 'undefined') {
		module.exports = factory(require('elfinder'));
	} else {
		factory(root.elFinder);
	}
}(this, function(elFinder) {
	elFinder.prototype.i18.ko = {
		translator : 'Hwang Ahreum; &lt;luckmagic@naver.com&gt;',
		language   : 'Korea-한국어',
		direction  : 'ltr',
		dateFormat : 'd.m.Y H:i', // Mar 13, 2012 05:27 PM
		fancyDateFormat : '$1 H:i', // will produce smth like: Today 12:25 PM
		nonameDateFormat : 'ymd-His', // to apply if upload file is noname: 120513172700
		messages   : {

			/********************************** errors **********************************/
			'error'                : '에러',
			'errUnknown'           : '알 수 없는 에러',
			'errUnknownCmd'        : '알 수 없는 명령어',
			'errJqui'              : 'jQuery UI 환경설정이 올바르지 않습니다. 선택,드래그앤드롭 컴포넌트가 포함되어야합니다',
			'errNode'              : 'elFinder를 생성하기 위해서는 DOM Element를 요구합니다',
			'errURL'               : 'elFinder 환경설정이 올바르지 않습니다! URL 옵션이 설정되지 않았습니다',
			'errAccess'            : '액세스 할 수 없습니다',
			'errConnect'           : 'Backend에 연결할 수 없습니다',
			'errAbort'             : '연결 실패',
			'errTimeout'           : '연결시간 초과',
			'errNotFound'          : 'Backend를 찾을 수 없습니다',
			'errResponse'          : 'Backend가 응답하지 않습니다',
			'errConf'              : 'Backend 환경설정이 올바르지 않습니다',
			'errJSON'              : 'PHP JSON 모듈이 설치되지 않았습니다',
			'errNoVolumes'         : '읽기 가능한 볼률이 없습니다',
			'errCmdParams'         : ' "$1" 명령어는 잘못된 인수입니다',
			'errDataNotJSON'       : '데이터는 JSON이 아닙니다',
			'errDataEmpty'         : '빈 데이터 입니다',
			'errCmdReq'            : 'Backend는 필요한 명령어 이름을 요청합니다',
			'errOpen'              : ' "$1" 열 수 없습니다',
			'errNotFolder'         : '폴더가 아닙니다',
			'errNotFile'           : '파일이 아닙니다',
			'errRead'              : ' "$1" 읽을 수 없습니다',
			'errWrite'             : ' "$1" 쓸 수 없습니다',
			'errPerm'              : '권한이 없습니다',
			'errLocked'            : ' "$1" 잠겨 있습니다, 이동, 삭제가 불가능합니다',
			'errExists'            : ' "$1" 존재합니다',
			'errInvName'           : '파일 이름에 올바르지 않은 문자가 포함되었습니다',
			'errInvDirname'        : 'Invalid folder name.',  // from v2.1.24 added 12.4.2017
			'errFolderNotFound'    : '폴더를 찾을 수 없습니다',
			'errFileNotFound'      : '파일을 찾을 수 없습니다',
			'errTrgFolderNotFound' : ' "$1" 폴더를 찾을 수 없습니다',
			'errPopup'             : '브라우저에서 팝업을 차단하였습니다.팝업을 허용하려면 브라우저 옵션을 변경하세요',
			'errMkdir'             : ' "$1" 폴더를 생성할 수 없습니다',
			'errMkfile'            : ' "$1" 파일을 생성할 수 없습니다',
			'errRename'            : ' "$1" 이름을 변경할 수 없습니다',
			'errCopyFrom'          : '볼률 "$1" 로부터 파일을 복사할 수 없습니다',
			'errCopyTo'            : '볼률 "$1" 에 파일을 복사할 수 없습니다',
			'errMkOutLink'         : 'Unable to create a link to outside the volume root.', // from v2.1 added 03.10.2015
			'errUpload'            : '업로드 에러',  // old name - errUploadCommon
			'errUploadFile'        : ' "$1" 업로드할 수 없습니다', // old name - errUpload
			'errUploadNoFiles'     : '업로드할 파일이 없습니다',
			'errUploadTotalSize'   : '데이터가 허용된 최대크기를 초과하였습니다', // old name - errMaxSize
			'errUploadFileSize'    : '파일이 허용된 최대크기를 초과하였습니다', //  old name - errFileMaxSize
			'errUploadMime'        : '잘못된 파일형식입니다',
			'errUploadTransfer'    : ' "$1" 전송 에러',
			'errUploadTemp'        : 'Unable to make temporary file for upload.', // from v2.1 added 26.09.2015
			'errNotReplace'        : 'Object "$1" already exists at this location and can not be replaced by object with another type.', // new
			'errReplace'           : 'Unable to replace "$1".',
			'errSave'              : ' "$1" 저장할 수 없습니다',
			'errCopy'              : ' "$1" 복사할 수 없습니다',
			'errMove'              : ' "$1" 이동할 수 없습니다',
			'errCopyInItself'      : ' "$1" 이곳에 복사 할 수 없습니다',
			'errRm'                : ' "$1" 이름을 변경할 수 없습니다',
			'errTrash'             : 'Unable into trash.', // from v2.1.24 added 30.4.2017
			'errRmSrc'             : 'Unable remove source file(s).',
			'errExtract'           : ' "$1" 에 압축을 풀 수 없습니다',
			'errArchive'           : '압축파일을 생성할 수 없습니다',
			'errArcType'           : '지원하지 않는 압축파일 형식입니다',
			'errNoArchive'         : '압축파일이 아니거나 지원하지 않는 압축파일 형식입니다',
			'errCmdNoSupport'      : '이 명령어는 Backend를 지원하지 않습니다',
			'errReplByChild'       : ' "$1" 폴더에 덮어쓸수 없습니다',
			'errArcSymlinks'       : '보안을 위해 시스템 호출을 포함한 압축파일인지를 분석합니다', // edited 24.06.2012
			'errArcMaxSize'        : '압축파일이 허용된 최대크기를 초과하였습니다',
			'errResize'            : ' "$1" 크기 변경을 할 수 없습니다',
			'errResizeDegree'      : 'Invalid rotate degree.',  // added 7.3.2013
			'errResizeRotate'      : 'Unable to rotate image.',  // added 7.3.2013
			'errResizeSize'        : 'Invalid image size.',  // added 7.3.2013
			'errResizeNoChange'    : 'Image size not changed.',  // added 7.3.2013
			'errUsupportType'      : '지원하지 않는 파일 형식',
			'errNotUTF8Content'    : 'File "$1" is not in UTF-8 and cannot be edited.',  // added 9.11.2011
			'errNetMount'          : 'Unable to mount "$1".', // added 17.04.2012
			'errNetMountNoDriver'  : 'Unsupported protocol.',     // added 17.04.2012
			'errNetMountFailed'    : 'Mount failed.',         // added 17.04.2012
			'errNetMountHostReq'   : 'Host required.', // added 18.04.2012
			'errSessionExpires'    : 'Your session has expired due to inactivity.',
			'errCreatingTempDir'   : 'Unable to create temporary directory: "$1"',
			'errFtpDownloadFile'   : 'Unable to download file from FTP: "$1"',
			'errFtpUploadFile'     : 'Unable to upload file to FTP: "$1"',
			'errFtpMkdir'          : 'Unable to create remote directory on FTP: "$1"',
			'errArchiveExec'       : 'Error while archiving files: "$1"',
			'errExtractExec'       : 'Error while extracting files: "$1"',
			'errNetUnMount'        : 'Unable to unmount.', // from v2.1 added 30.04.2012
			'errConvUTF8'          : 'Not convertible to UTF-8', // from v2.1 added 08.04.2014
			'errFolderUpload'      : 'Try the modern browser, If you\'d like to upload the folder.', // from v2.1 added 26.6.2015
			'errSearchTimeout'     : 'Timed out while searching "$1". Search result is partial.', // from v2.1 added 12.1.2016
			'errReauthRequire'     : 'Re-authorization is required.', // from v2.1.10 added 24.3.2016
			'errMaxTargets'        : 'Max number of selectable items is $1.', // from v2.1.17 added 17.10.2016
			'errRestore'           : 'Unable to restore from the trash. Can\'t identify the restore destination.', // from v2.1.24 added 3.5.2017
			'errEditorNotFound'    : 'Editor not found to this file type.', // from v2.1.25 added 23.5.2017
			'errServerError'       : 'Error occurred on the server side.', // from v2.1.25 added 16.6.2017
			'errEmpty'             : 'Unable to empty folder "$1".', // from v2.1.25 added 22.6.2017

			/******************************* commands names ********************************/
			'cmdarchive'   : '압축 파일 생성',
			'cmdback'      : '뒤로',
			'cmdcopy'      : '복사',
			'cmdcut'       : '자르기',
			'cmddownload'  : '다운로드',
			'cmdduplicate' : '사본',
			'cmdedit'      : '편집',
			'cmdextract'   : '압축풀기',
			'cmdforward'   : '앞으로',
			'cmdgetfile'   : '선택',
			'cmdhelp'      : '이 소프트웨어는',
			'cmdhome'      : '홈',
			'cmdinfo'      : '파일정보',
			'cmdmkdir'     : '새 폴더',
			'cmdmkdirin'   : 'Into New Folder', // from v2.1.7 added 19.2.2016
			'cmdmkfile'    : '새 텍스트 파일',
			'cmdopen'      : '열기',
			'cmdpaste'     : '붙여넣기',
			'cmdquicklook' : '미리보기',
			'cmdreload'    : '새로고침',
			'cmdrename'    : '이름 바꾸기',
			'cmdrm'        : '삭제',
			'cmdtrash'     : 'Into trash', //from v2.1.24 added 29.4.2017
			'cmdrestore'   : '복원', //from v2.1.24 added 3.5.2017
			'cmdsearch'    : '파일 찾기',
			'cmdup'        : '상위 폴더',
			'cmdupload'    : '업로드',
			'cmdview'      : '보기',
			'cmdresize'    : '이미지 사이즈변경',
			'cmdsort'      : '정렬',
			'cmdnetmount'  : '네트워크 볼륨 마운트', // added 18.04.2012
			'cmdnetunmount': '마운트 해제', // from v2.1 added 30.04.2012
			'cmdplaces'    : 'To Places', // added 28.12.2014
			'cmdchmod'     : '모드 변경', // from v2.1 added 20.6.2015
			'cmdopendir'   : '폴더 열기', // from v2.1 added 13.1.2016
			'cmdcolwidth'  : 'Reset column width', // from v2.1.13 added 12.06.2016
			'cmdfullscreen': '전체 화면', // from v2.1.15 added 03.08.2016
			'cmdmove'      : '이동', // from v2.1.15 added 21.08.2016
			'cmdempty'     : '빈 폴더', // from v2.1.25 added 22.06.2017
			'cmdundo'      : 'Undo', // from v2.1.27 added 31.07.2017
			'cmdredo'      : 'Redo', // from v2.1.27 added 31.07.2017
			'cmdpreference': '설정', // from v2.1.27 added 03.08.2017
			'cmdselectall' : '전체 선택', // from v2.1.28 added 15.08.2017
			'cmdselectnone': '전체 선택 해제', // from v2.1.28 added 15.08.2017
			'cmdselectinvert': 'Invert selection', // from v2.1.28 added 15.08.2017

			/*********************************** buttons ***********************************/
			'btnClose'  : '닫기',
			'btnSave'   : '저장',
			'btnRm'     : '삭제',
			'btnApply'  : '적용',
			'btnCancel' : '취소',
			'btnNo'     : '아니오',
			'btnYes'    : '예',
			'btnMount'  : '마운트',  // added 18.04.2012
			'btnApprove': 'Goto $1 & approve', // from v2.1 added 26.04.2012
			'btnUnmount': '언마운트', // from v2.1 added 30.04.2012
			'btnConv'   : '변환', // from v2.1 added 08.04.2014
			'btnCwd'    : '여기에',      // from v2.1 added 22.5.2015
			'btnVolume' : '볼륨',    // from v2.1 added 22.5.2015
			'btnAll'    : '전체',       // from v2.1 added 22.5.2015
			'btnMime'   : '파일 형태', // from v2.1 added 22.5.2015
			'btnFileName':'파일 이름',  // from v2.1 added 22.5.2015
			'btnSaveClose': '저장 후 닫기', // from v2.1 added 12.6.2015
			'btnBackup' : '백업', // fromv2.1 added 28.11.2015
			'btnRename'    : '이름 바꾸기',      // from v2.1.24 added 6.4.2017
			'btnRenameAll' : '이름 바꾸기(전체)', // from v2.1.24 added 6.4.2017
			'btnPrevious' : '이전 ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnNext'     : '다음 ($1/$2)', // from v2.1.24 added 11.5.2017
			'btnSaveAs'   : '다른 이름으로 저장', // from v2.1.25 added 24.5.2017

			/******************************** notifications ********************************/
			'ntfopen'     : '폴더 열기',
			'ntffile'     : '파일 열기',
			'ntfreload'   : '새로고침',
			'ntfmkdir'    : '폴더 생성',
			'ntfmkfile'   : '파일 생성',
			'ntfrm'       : '삭제',
			'ntfcopy'     : '복사',
			'ntfmove'     : '이동',
			'ntfprepare'  : '복사 준비',
			'ntfrename'   : '이름 바꾸기',
			'ntfupload'   : '업로드',
			'ntfdownload' : '다운로드',
			'ntfsave'     : '저장하기',
			'ntfarchive'  : '압축 파일 만들기',
			'ntfextract'  : '압축 풀기',
			'ntfsearch'   : '검색',
			'ntfresize'   : '이미지 크기 조절',
			'ntfsmth'     : '작업중 >_<',
			'ntfloadimg'  : '이미지 불러오기',
			'ntfnetmount' : 'Mounting network volume', // added 18.04.2012
			'ntfnetunmount': 'Unmounting network volume', // from v2.1 added 30.04.2012
			'ntfdim'      : 'Acquiring image dimension', // added 20.05.2013
			'ntfreaddir'  : 'Reading folder infomation', // from v2.1 added 01.07.2013
			'ntfurl'      : 'Getting URL of link', // from v2.1 added 11.03.2014
			'ntfchmod'    : 'Changing file mode', // from v2.1 added 20.6.2015
			'ntfpreupload': 'Verifying upload file name', // from v2.1 added 31.11.2015
			'ntfzipdl'    : 'Creating a file for download', // from v2.1.7 added 23.1.2016
			'ntfparents'  : 'Getting path infomation', // from v2.1.17 added 2.11.2016
			'ntfchunkmerge': 'Processing the uploaded file', // from v2.1.17 added 2.11.2016
			'ntftrash'    : 'Doing throw in the trash', // from v2.1.24 added 2.5.2017
			'ntfrestore'  : 'Doing restore from tha trash', // from v2.1.24 added 3.5.2017
			'ntfchkdir'   : 'Checking destination folder', // from v2.1.24 added 3.5.2017
			'ntfundo'     : 'Undoing previous operation', // from v2.1.27 added 31.07.2017
			'ntfredo'     : 'Redoing previous undone', // from v2.1.27 added 31.07.2017

			/*********************************** volumes *********************************/
			'volume_Trash' : 'Trash', //from v2.1.24 added 29.4.2017

			/************************************ dates **********************************/
			'dateUnknown' : '알수 없음',
			'Today'       : '오늘',
			'Yesterday'   : '내일',
			'msJan'       : '1월',
			'msFeb'       : '2월',
			'msMar'       : '3월',
			'msApr'       : '4월',
			'msMay'       : '5월',
			'msJun'       : '6월',
			'msJul'       : '7월',
			'msAug'       : '8월',
			'msSep'       : '9월',
			'msOct'       : '10월',
			'msNov'       : '11월',
			'msDec'       : '12월',
			'January'     : '1월',
			'February'    : '2월',
			'March'       : '3월',
			'April'       : '4월',
			'May'         : '5월',
			'June'        : '6월',
			'July'        : '7월',
			'August'      : '8월',
			'September'   : '9월',
			'October'     : '10월',
			'November'    : '11월',
			'December'    : '12월',
			'Sunday'      : '일요일',
			'Monday'      : '월요일',
			'Tuesday'     : '화요일',
			'Wednesday'   : '수요일',
			'Thursday'    : '목요일',
			'Friday'      : '금요일',
			'Saturday'    : '토요일',
			'Sun'         : '일',
			'Mon'         : '월',
			'Tue'         : '화',
			'Wed'         : '수',
			'Thu'         : '목',
			'Fri'         : '금',
			'Sat'         : '토',

			/******************************** sort variants ********************************/
			'sortname'          : '이름',
			'sortkind'          : '종류',
			'sortsize'          : '크기',
			'sortdate'          : '날짜',
			'sortFoldersFirst'  : 'Folders first',
			'sortperm'          : 'by permission', // from v2.1.13 added 13.06.2016
			'sortmode'          : 'by mode',       // from v2.1.13 added 13.06.2016
			'sortowner'         : 'by owner',      // from v2.1.13 added 13.06.2016
			'sortgroup'         : 'by group',      // from v2.1.13 added 13.06.2016
			'sortAlsoTreeview'  : 'Also Treeview',  // from v2.1.15 added 01.08.2016

			/********************************** new items **********************************/
			'untitled file.txt' : 'NewFile.txt', // added 10.11.2015
			'untitled folder'   : 'NewFolder',   // added 10.11.2015
			'Archive'           : 'NewArchive',  // from v2.1 added 10.11.2015

			/********************************** messages **********************************/
			'confirmReq'      : '확인',
			'confirmRm'       : '이 파일을 정말 삭제 하겠습니까?<br/>실행 후 되돌릴 수 없습니다!',
			'confirmRepl'     : '파일을 덮어쓰겠습니까?',
			'confirmRest'     : 'Replace existing item with the item in trash?', // fromv2.1.24 added 5.5.2017
			'confirmConvUTF8' : 'Not in UTF-8<br/>Convert to UTF-8?<br/>Contents become UTF-8 by saving after conversion.', // from v2.1 added 08.04.2014
			'confirmNonUTF8'  : 'Character encoding of this file couldn\'t be detected. It need to temporarily convert to UTF-8 for editting.<br/>Please select character encoding of this file.', // from v2.1.19 added 28.11.2016
			'confirmNotSave'  : 'It has been modified.<br/>Losing work if you do not save changes.', // from v2.1 added 15.7.2015
			'confirmTrash'    : 'Are you sure you want to move items to trash bin?', //from v2.1.24 added 29.4.2017
			'apllyAll'        : '모두 적용',
			'name'            : '이름',
			'size'            : '크기',
			'perms'           : '권한',
			'modify'          : '수정된 시간',
			'kind'            : '종류',
			'read'            : '읽기',
			'write'           : '쓰기',
			'noaccess'        : '액세스 불가',
			'and'             : '와',
			'unknown'         : '알 수 없음',
			'selectall'       : '모든 파일 선택',
			'selectfiles'     : '파일 선택',
			'selectffile'     : '첫번째 파일 선택',
			'selectlfile'     : '마지막 파일 선택',
			'viewlist'        : '리스트 보기',
			'viewicons'       : '아이콘 보기',
			'places'          : '위치',
			'calc'            : '계산',
			'path'            : '경로',
			'aliasfor'        : '별명',
			'locked'          : '잠금',
			'dim'             : '크기',
			'files'           : '파일',
			'folders'         : '폴더',
			'items'           : '아이템',
			'yes'             : '예',
			'no'              : '아니오',
			'link'            : '링크',
			'searcresult'     : '검색 결과',
			'selected'        : '아이템 선택',
			'about'           : '대하여',
			'shortcuts'       : '단축아이콘',
			'help'            : '도움말',
			'webfm'           : '웹 파일매니저',
			'ver'             : '버전',
			'protocolver'     : '프로토콜 버전',
			'homepage'        : '홈페이지',
			'docs'            : '문서',
			'github'          : 'GitHub으로 Fork하기',
			'twitter'         : '트위터따라가기',
			'facebook'        : '페이스북 가입하기',
			'team'            : '팀',
			'chiefdev'        : '개발팀장',
			'developer'       : '개발자',
			'contributor'     : '공헌자',
			'maintainer'      : '관리자',
			'translator'      : '번역',
			'icons'           : '아이콘',
			'dontforget'      : 'and don\'t forget to take your towel',
			'shortcutsof'     : '단축아이콘 사용불가',
			'dropFiles'       : '여기로 이동하기',
			'or'              : '또는',
			'selectForUpload' : '업로드 파일 선택',
			'moveFiles'       : '파일 이동',
			'copyFiles'       : '파일 복사',
			'restoreFiles'    : 'Restore items', // from v2.1.24 added 5.5.2017
			'rmFromPlaces'    : '현재 폴더에서 삭제하기',
			'aspectRatio'     : '화면비율',
			'scale'           : '크기',
			'width'           : '가로',
			'height'          : '세로',
			'resize'          : '사이즈 변경',
			'crop'            : '자르기',
			'rotate'          : '회전',
			'rotate-cw'       : '반시계방향 90도 회전',
			'rotate-ccw'      : '시계방향 90도 회전',
			'degree'          : '각도',
			'netMountDialogTitle' : '네트워크 볼륨 마운트', // added 18.04.2012
			'protocol'            : '프로토콜', // added 18.04.2012
			'host'                : '호스트 주소', // added 18.04.2012
			'port'                : '포트', // added 18.04.2012
			'user'                : '사용자', // added 18.04.2012
			'pass'                : '암호', // added 18.04.2012
			'confirmUnmount'      : '정말로 $1? 볼륨을 마운트 해제하시겠습니까?',  // from v2.1 added 30.04.2012
			'dropFilesBrowser': 'Drop or Paste files from browser', // from v2.1 added 30.05.2012
			'dropPasteFiles'  : 'Drop files, Paste URLs or images(clipboard) here', // from v2.1 added 07.04.2014
			'encoding'        : 'Encoding', // from v2.1 added 19.12.2014
			'locale'          : 'Locale',   // from v2.1 added 19.12.2014
			'searchTarget'    : 'Target: $1',                // from v2.1 added 22.5.2015
			'searchMime'      : 'Search by input MIME Type', // from v2.1 added 22.5.2015
			'owner'           : 'Owner', // from v2.1 added 20.6.2015
			'group'           : 'Group', // from v2.1 added 20.6.2015
			'other'           : 'Other', // from v2.1 added 20.6.2015
			'execute'         : 'Execute', // from v2.1 added 20.6.2015
			'perm'            : 'Permission', // from v2.1 added 20.6.2015
			'mode'            : 'Mode', // from v2.1 added 20.6.2015
			'emptyFolder'     : 'Folder is empty', // from v2.1.6 added 30.12.2015
			'emptyFolderDrop' : 'Folder is empty\\A Drop to add items', // from v2.1.6 added 30.12.2015
			'emptyFolderLTap' : 'Folder is empty\\A Long tap to add items', // from v2.1.6 added 30.12.2015
			'quality'         : 'Quality', // from v2.1.6 added 5.1.2016
			'autoSync'        : 'Auto sync',  // from v2.1.6 added 10.1.2016
			'moveUp'          : 'Move up',  // from v2.1.6 added 18.1.2016
			'getLink'         : 'Get URL link', // from v2.1.7 added 9.2.2016
			'selectedItems'   : 'Selected items ($1)', // from v2.1.7 added 2.19.2016
			'folderId'        : 'Folder ID', // from v2.1.10 added 3.25.2016
			'offlineAccess'   : 'Allow offline access', // from v2.1.10 added 3.25.2016
			'reAuth'          : 'To re-authenticate', // from v2.1.10 added 3.25.2016
			'nowLoading'      : 'Now loading...', // from v2.1.12 added 4.26.2016
			'openMulti'       : 'Open multiple files', // from v2.1.12 added 5.14.2016
			'openMultiConfirm': 'You are trying to open the $1 files. Are you sure you want to open in browser?', // from v2.1.12 added 5.14.2016
			'emptySearch'     : 'Search results is empty in search target.', // from v2.1.12 added 5.16.2016
			'editingFile'     : 'It is editing a file.', // from v2.1.13 added 6.3.2016
			'hasSelected'     : 'You have selected $1 items.', // from v2.1.13 added 6.3.2016
			'hasClipboard'    : 'You have $1 items in the clipboard.', // from v2.1.13 added 6.3.2016
			'incSearchOnly'   : 'Incremental search is only from the current view.', // from v2.1.13 added 6.30.2016
			'reinstate'       : 'Reinstate', // from v2.1.15 added 3.8.2016
			'complete'        : '$1 complete', // from v2.1.15 added 21.8.2016
			'contextmenu'     : 'Context menu', // from v2.1.15 added 9.9.2016
			'pageTurning'     : 'Page turning', // from v2.1.15 added 10.9.2016
			'volumeRoots'     : 'Volume roots', // from v2.1.16 added 16.9.2016
			'reset'           : 'Reset', // from v2.1.16 added 1.10.2016
			'bgcolor'         : 'Background color', // from v2.1.16 added 1.10.2016
			'colorPicker'     : 'Color picker', // from v2.1.16 added 1.10.2016
			'8pxgrid'         : '8px Grid', // from v2.1.16 added 4.10.2016
			'enabled'         : 'Enabled', // from v2.1.16 added 4.10.2016
			'disabled'        : 'Disabled', // from v2.1.16 added 4.10.2016
			'emptyIncSearch'  : 'Search results is empty in current view.\\APress [Enter] to expand search target.', // from v2.1.16 added 5.10.2016
			'emptyLetSearch'  : 'First letter search results is empty in current view.', // from v2.1.23 added 24.3.2017
			'textLabel'       : 'Text label', // from v2.1.17 added 13.10.2016
			'minsLeft'        : '$1 mins left', // from v2.1.17 added 13.11.2016
			'openAsEncoding'  : 'Reopen with selected encoding', // from v2.1.19 added 2.12.2016
			'saveAsEncoding'  : 'Save with the selected encoding', // from v2.1.19 added 2.12.2016
			'selectFolder'    : 'Select folder', // from v2.1.20 added 13.12.2016
			'firstLetterSearch': 'First letter search', // from v2.1.23 added 24.3.2017
			'presets'         : 'Presets', // from v2.1.25 added 26.5.2017
			'tooManyToTrash'  : 'It\'s too many items so it can\'t into trash.', // from v2.1.25 added 9.6.2017
			'TextArea'        : 'TextArea', // from v2.1.25 added 14.6.2017
			'folderToEmpty'   : 'Empty the folder "$1".', // from v2.1.25 added 22.6.2017
			'filderIsEmpty'   : 'There are no items in a folder "$1".', // from v2.1.25 added 22.6.2017
			'preference'      : 'Preference', // from v2.1.26 added 28.6.2017
			'language'        : 'Language setting', // from v2.1.26 added 28.6.2017
			'clearBrowserData': 'Initialize the settings saved in this browser', // from v2.1.26 added 28.6.2017
			'toolbarPref'     : 'Toolbar setting', // from v2.1.27 added 2.8.2017
			'charsLeft'       : '... $1 chars left.',  // from v2.1.29 added 30.8.2017
			'sum'             : 'Sum', // from v2.1.29 added 28.9.2017
			'roughFileSize'   : 'Rough file size', // from v2.1.30 added 2.11.2017
			'autoFocusDialog' : 'Focus on the element of dialog with mouseover',  // from v2.1.30 added 2.11.2017

			/********************************** mimetypes **********************************/
			'kindUnknown'     : '알수없음',
			'kindRoot'        : '볼륨 최상단', // from v2.1.16 added 16.10.2016
			'kindFolder'      : '폴더',
			'kindSelects'     : 'Selections', // from v2.1.29 added 29.8.2017
			'kindAlias'       : '별칭',
			'kindAliasBroken' : '손상된 Alias',
			// applications
			'kindApp'         : '응용프로그램',
			'kindPostscript'  : 'Postscript 문서',
			'kindMsOffice'    : 'Microsoft Office 문서',
			'kindMsWord'      : 'Microsoft Word 문서',
			'kindMsExcel'     : 'Microsoft Excel 문서',
			'kindMsPP'        : 'Microsoft Powerpoint',
			'kindOO'          : 'Office 문서 열기',
			'kindAppFlash'    : 'Flash',
			'kindPDF'         : 'PDF(PDF)',
			'kindTorrent'     : '토렌트 파일',
			'kind7z'          : '7z 압축 파일',
			'kindTAR'         : 'TAR 압축 파일',
			'kindGZIP'        : 'GZIP 압축 파일',
			'kindBZIP'        : 'BZIP 압축 파일',
			'kindXZ'          : 'XZ 압축 파일',
			'kindZIP'         : 'ZIP 압축 파일',
			'kindRAR'         : 'RAR 압축 파일',
			'kindJAR'         : 'Java JAR 파일',
			'kindTTF'         : '트루타입 글꼴',
			'kindOTF'         : '오픈타입 글꼴',
			'kindRPM'         : 'RPM 패키지',
			// texts
			'kindText'        : 'Text 문서',
			'kindTextPlain'   : '보통 텍스트',
			'kindPHP'         : 'PHP 소스',
			'kindCSS'         : 'CSS 문서',
			'kindHTML'        : 'HTML 문서',
			'kindJS'          : '자바스크립트 소스',
			'kindRTF'         : 'RTF 형식',
			'kindC'           : 'C 소스',
			'kindCHeader'     : 'C 헤더소스',
			'kindCPP'         : 'C++ 소스',
			'kindCPPHeader'   : 'C++ 헤더소스',
			'kindShell'       : 'Unix shell 스크립트',
			'kindPython'      : 'Python 소스',
			'kindJava'        : 'Java 소스',
			'kindRuby'        : 'Ruby 소스',
			'kindPerl'        : 'Perl 스크립트',
			'kindSQL'         : 'SQL 소스',
			'kindXML'         : 'XML 문서',
			'kindAWK'         : 'AWK 소스',
			'kindCSV'         : 'CSV 형식',
			'kindDOCBOOK'     : 'XML Docbook 문서',
			'kindMarkdown'    : '마크다운 문서', // added 20.7.2015
			// images
			'kindImage'       : '이미지',
			'kindBMP'         : 'BMP 이미지',
			'kindJPEG'        : 'JPEG 이미지',
			'kindGIF'         : 'GIF 이미지',
			'kindPNG'         : 'PNG 이미지',
			'kindTIFF'        : 'TIFF 이미지',
			'kindTGA'         : 'TGA 이미지',
			'kindPSD'         : 'Adobe Photoshop 이미지',
			'kindXBITMAP'     : 'X bitmap 이미지',
			'kindPXM'         : 'Pixelmator 이미지',
			// media
			'kindAudio'       : '오디오 미디어',
			'kindAudioMPEG'   : 'MPEG 오디오',
			'kindAudioMPEG4'  : 'MPEG-4 오디오',
			'kindAudioMIDI'   : 'MIDI 오디오',
			'kindAudioOGG'    : 'Ogg Vorbis 오디오',
			'kindAudioWAV'    : 'WAV 오디오',
			'AudioPlaylist'   : 'MP3 플레이 리스트',
			'kindVideo'       : 'Video 미디어',
			'kindVideoDV'     : 'DV 동영상',
			'kindVideoMPEG'   : 'MPEG 동영상',
			'kindVideoMPEG4'  : 'MPEG-4 동영상',
			'kindVideoAVI'    : 'AVI 동영상',
			'kindVideoMOV'    : '퀵타임 동영상',
			'kindVideoWM'     : '윈도우 미디어 플레이어 동영상',
			'kindVideoFlash'  : '플래쉬 동영상',
			'kindVideoMKV'    : 'Matroska 동영상',
			'kindVideoOGG'    : 'Ogg 동영상'
		}
	};
}));

