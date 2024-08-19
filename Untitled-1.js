import PropTypes from "https://esm.sh/prop-types?dev";
import _ from "https://esm.sh/underscore?dev";
import React from "https://esm.sh/react?dev";
import ReactDOM from "https://esm.sh/react-dom/client?dev";
import jQuery from "https://esm.sh/jquery?dev";
import MathQuill from "/build/mathquill_2591d24 - Copy.js";
window.MathQuill = MathQuill.getInterface(2);
const symbolGroups = {
    BASIC : [
        {toType:"+", tex:"+"},
        {toType:"-", tex:"-"},
        {toType:"* (asterisk)", tex:"\\cdot"},
        {toType:"×", tex:"\\times"},
        {toType:"÷", tex:"\\div"},
        {toType:"/", tex:"\\frac{a}{b}", description:"fraction", editorCommands: input => {
            input.typedText("/");
        }},
        {toType:"=", tex:"="},
        {toType:"≠", tex:"\\neq"},
        {toType:"≈", tex:"\\approx"},
        {toType:"π", tex:"\\pi"},
        {toType:"sqrt", tex:"\\sqrt{x}", editorCommands: input => {
            input.cmd("\\sqrt");
        }},
        {toType:"\\nthroot [Enter]", tex:"\\sqrt[y]{x}", editorCommands: input => {
            input.cmd("\\nthroot").focus();
        }},
        {toType:"log", tex:"\\log"},
        {toType:"ln", tex:"\\ln"},
        {toType:"log_b", tex:"\\log_b", editorCommands: input => {
                input.typedText("log_");
                input.keystroke("Right");
                input.typedText("(");
                input.keystroke("Left");
                input.keystroke("Left");
        }},
        {toType:"|", tex:"\\vert"},
        {toType:"| (shift backslash)", tex:"\\left|x\\right|", editorCommands: input => {
                input.typedText("|");
        }},
        /* () => [<TeX key="abs" style={symbStyle}>\left|x\right|</TeX>, "\\left|x\\right|"], */
        {toType:"_ (underscore)", tex:"A_b", description: "subscript", editorCommands: input => {
                input.typedText("_");
        }},
        {toType:"^ (caret), i.e. shift+6", tex:"a^b", description:"power", editorCommands: input => {
                input.typedText("^");
        }},
        {toType:">", tex:">"},
        {toType:"≥", tex:"\\ge"},
        {toType:"<", tex:"<"},
        {toType:"≤", tex:"\\le"},
        {toType:"±", tex:"\\pm"},
        {toType:"∘", description: "function composition", tex:"\\circ"},
        {toType:"(", tex:"(", editorCommands: input => {
            input.typedText("(");
        }},
        {toType:")", tex:")", editorCommands: input => {
            input.typedText(")");
        }},
        {toType:"[", tex:"[", editorCommands: input => {
            input.typedText("[");
        }},
        {toType:"]", tex:"]", editorCommands: input => {
            input.typedText("]");
        }},
        {toType:"⟨", tex:"\\langle"},
        {toType:"⟩", tex:"\\rangle"},
        {toType:"{", tex:"\\{", editorCommands: input => {
            input.typedText("{");
        }},
        {toType:"}", tex:"\\}", editorCommands: input => {
            input.typedText("}");
        }},
    ],
    SET_THEORY : [
        {toType:"∀", tex:"\\forall"},
        {toType:"∴", tex:"\\therefore"},
        {toType:"∵", tex:"\\because"},
        {toType:"∈", tex:"\\in"},
        {toType:"∉", tex:"\\notin"},
        {toType:"∄", tex:"\\nexists"},
        {toType:"∃", tex:"\\exists"},
        {toType:"¬", tex:"\\neg"},
        {toType:"∨", tex:"\\lor"},
        {toType:"∧", tex:"\\land"},
        {toType:"→", tex:"\\to"},
        {toType:"←", tex:"\\gets"},
        {toType:"\\choose [Enter]", tex:"\\binom{n}{m}", editorCommands: input => {
            input.cmd("\\choose");
        }},
        {toType:"∪", tex:"\\cup"},
        {toType:"∩", tex:"\\cap"},
        {toType:"⊂", tex:"\\subset"},
        {toType:"⊆", tex:"\\subseteq"},
        {toType:"⊃", tex:"\\supset"},
        {toType:"⊇", tex:"\\supseteq"},
        {toType:"∅", tex:"\\emptyset"},
        {toType:"ℂ", tex:"\\mathbb{C}", editorCommands: input => {
            input.cmd("\\C");
        }},
        {toType:"ℍ", tex:"\\mathbb{H}", editorCommands: input => {
            input.cmd("\\H");
        }},
        {toType:"ℕ", tex:"\\mathbb{N}", editorCommands: input => {
            input.cmd("\\N");
        }},
        {toType:"ℙ", tex:"\\mathbb{P}",  editorCommands: input => {
            input.cmd("\\P");
        }},
        {toType:"ℚ", tex:"\\mathbb{Q}",  editorCommands: input => {
            input.cmd("\\Q");
        }},
        {toType:"ℝ", tex:"\\mathbb{R}",  editorCommands: input => {
            input.cmd("\\R");
        }},
        {toType:"\\Z [Enter]", tex:"\\mathbb{Z}",  editorCommands: input => {
            input.cmd("\\Z");
        }}
    ],
    GEOMETRY : [

        {toType:"\\underline [Enter]", tex:"\\underline{AB}", editorCommands: input => {
            input.cmd("\\underline");
        }},
        {toType:"\\overline [Enter]", tex:"\\overline{AB}", editorCommands: input => {
            input.cmd("\\overline");
        }},
        {toType:"\\overleftarrow [Enter]", tex:"\\overleftarrow{AB}", editorCommands: input => {
            input.cmd("\\overleftarrow");
        }},
        {toType:"\\overrightarrow [Enter]", tex:"\\overrightarrow{AB}", editorCommands: input => {
            input.cmd("\\overrightarrow");
        }},
        {toType:"\\overleftrightarrow [Enter]", tex:"\\overleftrightarrow{AB}", editorCommands: input => {
            input.cmd("\\overleftrightarrow");
        }},
        /* not in katex */
        /* MathQuillStatic compoent currenty doesn't work on buttons, closes math keyboard. For now, just
            copying out the html from rendered MathQuill as workaround*/
        {toType:"\\overarc [Enter]", tex:"\\overarc{AB}", editorCommands: input => {
                input.cmd("\\overarc");
        }},
        /* not in MathQuill, there is "hat" but it feels a bit broken
        {toType:"\\widehat [Enter]", tex:"\\widehat{abc}", editorCommands: input => {
            input.cmd("\\widehat");
        }},
        */
        {toType:"△", tex:"\\triangle"},

        /* renders funny in MathQuill, almost looks like emoji?
        {toType:"□", tex:"\\square"},
        */
        {toType:"⊙", tex:"\\odot"},
        {toType:"○", tex:"\\bigcirc"},
        {toType:"°", tex:"\\degree"},
        {toType:"∠", tex:"\\angle"},
        {toType:"∡", tex:"\\measuredangle"},
        /* not in MathQuill
        {toType:"∢", tex:"\\sphericalangle"},
        */
        {toType:"≡", tex:"\\equiv"},
        {toType:"∝", tex:"\\propto"},
        {toType:"≅", tex:"\\cong"},
        {toType:"⟂", tex:"\\perp"},
        {toType:"∥", tex:"\\parallel"},
        /* not in MathQuill
        {toType:"≊", tex:"\\approxeq"},
        */
        {toType:"≃", tex:"\\simeq"},
        {toType:"∼", tex:"\\sim"},
        // TODO - wrong symbol used for this in MathQuill
        // Katex appears correct
        //{toType:"≍", tex:"\\asymp"},
    ],
    MATRIX: [
        {toType:"…", tex:"\\dots"},
        {toType:"⋯", tex:"\\cdots"},
        {toType:"⋱", tex:"\\ddots"},
        {toType:"⋰", tex:"\\iddots"},
        {toType:"⋮", tex:"\\vdots"},
    ],
    CALC : [
        {toType:"∫", tex:"\\int"},
        {toType:"'", tex:"'"},
        {toType:"∮", tex:"\\oint"},
        {toType:"∂", tex:"\\partial"},
        {toType:"∑", tex:"\\sum"},
        {toType:"∏", tex:"\\prod"},
        {toType:"∞", tex:"\\infty"},
    ],
    GREEK : [
        {toType:"α", tex:"\\alpha"},
        {toType:"β", tex:"\\beta"},
        {toType:"γ", tex:"\\gamma"},
        {toType:"Γ", tex:"\\Gamma"},
        {toType:"δ", tex:"\\delta"},
        {toType:"Δ", tex:"\\Delta"},
        {toType:"ϵ", tex:"\\epsilon"},
        {toType:"ϝ", tex:"\\digamma"},
        {toType:"ζ", tex:"\\zeta"},
        {toType:"η", tex:"\\eta"},
        {toType:"θ", tex:"\\theta"},
        {toType:"Θ", tex:"\\Theta"},
        {toType:"ι", tex:"\\iota"},
        {toType:"κ", tex:"\\kappa"},
        {toType:"λ", tex:"\\lambda"},
        {toType:"Λ", tex:"\\Lambda"},
        {toType:"μ", tex:"\\mu"},
        {toType:"ν", tex:"\\nu"},
        {toType:"ξ", tex:"\\xi"},
        {toType:"Ξ", tex:"\\Xi"},
        {toType:"π", tex:"\\pi"},
        {toType:"Π", tex:"\\Pi"},
        {toType:"ρ", tex:"\\rho"},
        {toType:"ϱ", tex:"\\varrho"},
        {toType:"σ", tex:"\\sigma"},
        {toType:"Σ", tex:"\\Sigma"},
        {toType:"τ", tex:"\\tau"},
        {toType:"υ", tex:"\\upsilon"},
        {toType:"Υ", tex:"\\Upsilon"},
        {toType:"ϕ", tex:"\\phi"},
        {toType:"Φ", tex:"\\Phi"},
        {toType:"χ", tex:"\\chi"},
        {toType:"ψ", tex:"\\psi"},
        {toType:"Ψ", tex:"\\Psi"},
        {toType:"ω", tex:"\\omega"},
        {toType:"Ω", tex:"\\Omega"},
    ]
};
class Button extends React.Component {
    render() {
        const onClick = this.props.onClick;
        const title = this.props.title;
        const style =  this.props.style;
        const className = this.props.className ? this.props.className : "fm-button";
        return (
            <button type="button"
                className={className}
                style={style}
                disabled={this.props.disabled}
                onClick={function() {
                     onClick();
                 }}
                title={title}
            >
            <div style={{display: "inline-block"}}>{this.props.text}</div>
            </button>
        );
  }
}
class LightButton extends React.Component {
    render() {
        const onClick = this.props.onClick;
        const title = this.props.title;
        const style =  this.props.style;
        const className = this.props.className ? this.props.className : "fm-button-light";
        return (
            <button type="button"
                className={className}
                onClick={function() {
                    onClick();
                }}
                title={title}
                style={style}
                disabled={this.props.disabled}
            >
                <div style={{display:"inline-block"}}>
                <div style={{float: "left", paddingTop: "4px"}}>{this.props.text}</div>
                </div>
            </button>
        );
  }
}
class MathQuillStatic extends React.Component {
    staticMath = React.createRef();

    render() {
        const tex = this.props.tex;
        return (
            <div style={{ ...this.props.style, display:"inline-block"}} onClick={this.props.onClick}>
                <span ref={this.staticMath}>{tex}</span>
            </div>
        );
    };

    componentDidMount() {
        window.MathQuill.StaticMath(this.staticMath.current);
    };
}
class MatrixSizePicker extends React.Component {
    static propTypes = {
        onInsert: PropTypes.func.isRequired,
    };
    state = {
        showMenu: false,
        hoveredCell: null,
        endCaps: 'bmatrix'
    }
    closeMenu = () => {
        this.setState({showMenu: false});
    }

    // https://blog.logrocket.com/controlling-tooltips-pop-up-menus-using-compound-components-in-react-ccedc15c7526/
    componentDidUpdate() {
      setTimeout(() => {
        if(this.state.showMenu){
          window.addEventListener('click', this.closeMenu);
        }
        else{
          window.removeEventListener('click', this.closeMenu);
        }
      }, 0);
    }

    render() {
        // based on current hovered cell (if any) return a color for
        // a given cell, all of the rows and columns before the hovered
        // cell are highlighted to show the shape/size of the matrix
        // that will be created clicking on the current cell
        const cellColor = (row, column) => {
            if (this.state.hoveredCell &&
                this.state.hoveredCell[0] >= row &&
                this.state.hoveredCell[1] >= column) {
                return '#e0e0e0';
            } else {
                return '#ffffff';
            }
        }
        return (
            <div>
                <div style={{float: 'left'}}>
                Choose a Size
                <br />
                <div
                    onMouseLeave={() => {
                        this.setState({hoveredCell : null});
                    }}
                >
                {
                _.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], row => {
                    return (<div key={'matrix_row_' + row} style={{padding: '0px', margin: '0px', lineHeight: 0.8}}>
                        {_.map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], column => {
                            // create a (component, thing we should send to MathQuill) pair
                            return <button type="button" className="fm-close-button"
                                           key={'matrix_' + row + ' ' + column}
                                           style={{float: 'none',
                                                   height: '25px',
                                                   width: '25px',
                                                   padding: '0px',
                                                   margin: '0px',
                                                   backgroundColor: cellColor(row, column) }}
                                    onClick={() => {
                                        this.props.onInsert(input => {
                                            const oneRow = new Array(column).join('&');
                                            const latex = '\\begin{' + this.state.endCaps + '}' +
                                                // yes this is dumb, but so is javascript, could be clearer
                                                // with just polyfilling something but I don't feel like doing
                                                // that right now
                                                (row === 1 ? oneRow : new Array(row).join(oneRow + '\\\\')) +
                                                '\\end{' + this.state.endCaps + '}';
                                            input.write(latex);
                                        });
                                    }}
                                    onMouseEnter={() => {
                                        this.setState({hoveredCell : [row, column]});
                                    }}
                                    />
                        })
                        }
                    </div>);
                })
                }
                </div>
                </div>
                <div className="matrix-end-caps-and-buttons"
                        style={{width: "150px", marginLeft: '10px', marginRight: '10px', float:'left'}}>
                    End Caps
                    <br />

                     <button type="button"
                        className='fm-button-light'
                        onClick={
                          function() {
                              this.setState({showMenu: !this.state.showMenu});
                          }.bind(this)}
                        >
                            <div style={{display:"inline-block"}}>
                                <div style={{float: "left", fontSize: '16px', paddingTop: "4px"}}>
                                    {
                                        function() {
                                            var caps;
                                            switch(this.state.endCaps) {
                                                case 'bmatrix': caps = '[ ]'; break;
                                                case 'pmatrix': caps = '( )'; break;
                                                case 'Bmatrix': caps = '{ }'; break;
                                                case 'cases': caps = '{'; break;
                                                case 'vmatrix': caps = '| |'; break;
                                                case 'Vmatrix': caps = '‖ ‖'; break;
                                                default: caps = 'None';
                                            };
                                            return caps + " \u25BC";
                                        }.bind(this)()}
                                </div>
                            </div>
                    </button>
                    <div style={{
                            backgroundColor: '#f1f1f1', position:'absolute',
                            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                            minWidth: '50px',
                            // TODO - fix this to keep track of used z-indexes
                            zIndex: '5',
                            display: this.state.showMenu ? 'block' : 'none' }}>
                        <LightButton text='[ ]'
                            style={{display: 'block', width: '100%', borderRadius: '0px'}}
                            onClick={() => {this.setState({endCaps: 'bmatrix'}); this.closeMenu();}}/>
                        <LightButton text='( )'
                            style={{display: 'block', width: '100%', borderRadius: '0px'}}
                            onClick={() => {this.setState({endCaps: 'pmatrix'}); this.closeMenu();}}/>
                        <LightButton text='None'
                            style={{display: 'block', width: '100%', borderRadius: '0px'}}
                            onClick={() => {this.setState({endCaps: 'matrix'}); this.closeMenu();}}/>
                        <LightButton text='{ }'
                            style={{display: 'block', width: '100%', borderRadius: '0px'}}
                            onClick={() => {this.setState({endCaps: 'Bmatrix'}); this.closeMenu();}}/>
                        <LightButton text='{'
                            style={{display: 'block', width: '100%', borderRadius: '0px'}}
                            onClick={() => {this.setState({endCaps: 'cases'}); this.closeMenu();}}/>
                        <LightButton text='| |'
                            style={{display: 'block', width: '100%', borderRadius: '0px'}}
                            onClick={() => {this.setState({endCaps: 'vmatrix'}); this.closeMenu();}}/>
                        <LightButton text='‖ ‖'
                            style={{display: 'block', width: '100%', borderRadius: '0px'}}
                            onClick={() => {this.setState({endCaps: 'Vmatrix'}); this.closeMenu();}}/>
                    </div>
                    <br />
                    <br />
                    {this.props.buttonRows}
                </div>
            </div>
        );
    }
}
function TexButtons({onInsert,className}) {
    const [buttonGroup, setButtonGroup] = React.useState('BASIC');
    const singleCharButton = (char,editorCommands) => {
        return (<button type="button" onClick={() => onInsert(editorCommands||char)}
                                    className="tex-button"
                                    key={char}
                                    tabIndex={-1}>
                        <div style={{display: "inline-block", padding: "3px",fontSize:"16px"}}>{char}</div>
                </button>);
    };
    const buttonRows = _.map(symbolGroups[buttonGroup], symbol => {
        // create a (component, thing we should send to MathQuill) pair
        return symbol.toType.length===1?singleCharButton(symbol.toType,symbol.editorCommands||symbol.tex):<button type="button" onClick={() => {
                        var toInsert = symbol.tex;
                        if (_(symbol.editorCommands).isFunction()) {
                            toInsert = symbol.editorCommands;
                        }
                        onInsert(toInsert)
                        }}
                        className="tex-button"
                        key={symbol.tex}
                        tabIndex={-1}
                        title={"keyboard shortcut: " + symbol.toType }>
                <MathQuillStatic tex={symbol.tex} /> 
        </button>;
    });


    const textButton = () => {
        return (
                <button type="button" title={"\\text [Enter]"} className="tex-button"
                    style={{display: "inline-block", float: "none", width: "50px"}}
                            onClick={() => {
                        onInsert(input => {
                            input.cmd("\\text");
                        });
                    }}>
                    <div style={{display: "inline-block", padding: "3px",fontSize:"16px"}}>Text</div>
                </button>
        );
    }

    const backspaceButton = () => {
        return (
                <button type="button" className="tex-button wide-tex-button" style={{display: "inline-block", float: "none"}}
                            onClick={() => {
                        onInsert(input => {
                            input.keystroke("Backspace");
                        });
                    }}>
                    <div style={{display: "inline-block", padding: "3px",fontSize:"16px"}}>Backspace</div>
                </button>
        );

    };

    const arrowKeys = () => {
        return (
            <table style={{borderCollapse:"collapse"}}>
            <tbody>
            <tr>
            <td></td>
            <td>
                <button type="button" className="tex-button" style={{display: "inline-block", float: "none"}}
                        onClick={() => {
                        onInsert(input => {
                            input.keystroke("Up");
                        });
                    }}>
                    <div style={{display: "inline-block", padding: "3px",fontSize:"16px"}}>↑</div>
                </button>
            </td>
            <td></td>
            </tr>
            <tr>
            <td>
                <button type="button" className="tex-button" style={{display: "inline-block", float: "none"}}
                        onClick={() => {
                        onInsert(input => {
                            input.keystroke("Left");
                        });
                    }}>
                    <div style={{display: "inline-block", padding: "3px",fontSize:"16px"}}>←</div>
                </button>
            </td>
            <td>
                <button type="button" className="tex-button" style={{display: "inline-block", float: "none"}}
                            onClick={() => {
                        onInsert(input => {
                            input.keystroke("Down");
                        });
                    }}>
                    <div style={{display: "inline-block", padding: "3px",fontSize:"16px"}}>↓</div>
                </button>
            </td>
            <td>
                <button type="button" className="tex-button" style={{display: "inline-block", float: "none"}}
                        onClick={() => {
                        onInsert(input => {
                            input.keystroke("Right");
                        });
                    }}>
                    <div style={{display: "inline-block", padding: "3px",fontSize:"16px"}}>→</div>
                </button>
            </td>
            </tr>
            </tbody>
            </table>
        );
    }

    return <div className={`${className} preview-measure`}>
        {/* TODO - come back to this, wanted to take up less space on mobile
            but it looks like this fights with the click handling on this
            overlay, probably related to keeping the MathQuill box focused
            even when clicking the buttons
        <div className="math-button-categories-dropdown">
            Symbols&nbsp;
            <select
                value={this.props.buttonGroup}
                onChange={function(evt) {
                    dispatch(
                        { type : SET_KEYBOARD_BUTTON_GROUP, ['BUTTON_GROUP'] : evt.target.value});}}
            >
                <option value="BASIC">Basic</option>
                <option value="GEOMETRY">Geometry</option>
                <option value="SET_THEORY">Set Theory and Logic</option>
                <option value="CALC">Calc</option>
                <option value="GREEK">Greek</option>
            </select>
        </div>
        */}
        <div className="math-button-categories">
            <Button text="Basic"
                    style={buttonGroup === 'BASIC' ?
                                { backgroundColor: "#052d66"} : {}}
                onClick={()=>setButtonGroup('BASIC')}/>
            <Button text="Geometry"
                    style={buttonGroup === 'GEOMETRY' ?
                                { backgroundColor: "#052d66"} : {}}
                onClick={()=>setButtonGroup('GEOMETRY')}/>
            <Button text="Set theory"
                    style={buttonGroup === 'SET_THEORY' ?
                                { backgroundColor: "#052d66"} : {}}
                onClick={()=>setButtonGroup('SET_THEORY')}/>
            <Button text="Matrix"
                    style={buttonGroup === 'MATRIX' ?
                                { backgroundColor: "#052d66"} : {}}
                onClick={()=>setButtonGroup('MATRIX')}/>
            <Button text="Calculus"
                    style={buttonGroup === 'CALC' ?
                                { backgroundColor: "#052d66"} : {}}
                onClick={()=>setButtonGroup('CALC')}/>
            <Button text="Greek"
                    style={buttonGroup === 'GREEK' ?
                                { backgroundColor: "#052d66"} : {}}
                onClick={()=>setButtonGroup('GREEK')}/>
        </div>

        <div>
        <div className="homepage-disappear-mobile" style={{display: "inline-block", verticalAlign:"top"}}>
            <div>
                {_.map([1,2,3,4,5,6,7,8,9,0], number => {
                    // create a (component, thing we should send to MathQuill) pair
                    return singleCharButton(number);
                })}
            </div>
        </div>
        </div>
        <div>
        <div className="math-buttons-current-panel">
            {buttonGroup === 'MATRIX' ?
                    <MatrixSizePicker onInsert={onInsert} buttonRows={buttonRows}/>
                    : <span>{buttonRows} </span>
            }

        </div>
        <div style={{float: 'left', marginTop: '10px'}}>
            {textButton()}
            {backspaceButton()}
            <div style={{display: 'block'}}>
                {_.map(['a','b','c'], letter => {
                    // create a (component, thing we should send to MathQuill) pair
                    return singleCharButton(letter);
                })}
            </div>
            <div style={{display: 'inline-block'}}>
                {_.map(['x','y','z'], letter => {
                    // create a (component, thing we should send to MathQuill) pair
                    return singleCharButton(letter);
                })}
            </div>
            {arrowKeys()}
        </div>
        </div>
    </div>;
}
function MathInput() {
    const [value, setValue] = React.useState(<?php if (isset($post)) echo json_encode($post['latex']);?>);
    const [focused, setFocus] = React.useState(false);
    const [state, setState] = React.useState({UNDO_STACK : [], REDO_STACK : []});
    const Textarea = React.createRef();
    React.useEffect(() => {
        inputRef.current.textContent = value;
        window.mathField=MathQuill.TextField(inputRef.current,{
            // The name of this option is somewhat misleading, as tabbing in
            // MathQuill breaks you out of a nested context (fraction/script)
            // if you're in one, but moves focus to the next input if you're
            // not. Spaces (with this option enabled) are just ignored in the
            // latter case.
            spaceBehavesLikeTab: false,

            // for intuitive navigation of fractions
            leftRightIntoCmdGoes: 'up',

            // TODO - make xi accessible in, prevents typing "x in"
            // TODO - "in" as auto-symbol prevents typing int
            autoCommands: 'subset superset union intersect forall therefore exists alpha beta gamma Gamma delta epsilon digamma zeta eta theta iota kappa lambda xikappa lambda omicron pi rho varrho sigma Sigma tau upsilon Upsilon omega sqrt sum int',
            autoSubscriptNumerals: true,
            substituteTextarea: function() {
                return Textarea.current;
            },
            charsThatBreakOutOfSupSub: '=<>≠≤≥',
            handlers: {
                edit: mathfield=> {
        const newContent = mathfield.latex();
        console.log((newContent === value)?'no change':'new content: '+newContent);
        if(newContent === value) return;
        const latestUndo = state['UNDO_STACK'].length > 0 ? state['UNDO_STACK'][0] : false;
        var editType;// "ADD" or "DELETE"
        var pos;// position of the add or delete
        var updateLastUndoAction = false;
        // if the last action was an edit of this step, don't add an undo
        // event for each character typed, collapse them together.
        // when users type into a textbox, they expect an undo/redo function to remove/add series of characters that were typed/deleted not an individual undo/redo action for each 1 character edit. This functionality is implemented by looking at the type of edit is currently being done, and checking if it should be combined with the last undo event on the stack.
        // Check if this is a single character edit. If it is find its location, and detemine if it is an insertion or deletion
        if (Math.abs(value.length - newContent.length) === 1) {
            // find the first mismatching character
            var i = 0;
            for (; i < value.length && i < newContent.length; i++) {
                if (newContent.charAt(i) === value.charAt(i)) continue;
                else break;
            }

            // inspect the rest of the inputs to determine if this was a single chracter add or delete
            //
            // tricky case to check, highlight multiple characters and paste in the number of chracters that was highlighted
            // this might cause some weird behavior if the strings overlap, but if data is replaced by mostly the same values there really isn't info lost if it acts somewhat like typing the text out in series

            if (newContent.length > value.length) {
                // one character addition
                if (i === newContent.length - 1
                        || newContent.substring(i+1) === value.substring(i)) {
                    pos = i;
                    editType = 'ADD';
                    if (latestUndo && latestUndo['INVERSE_ACTION']['EDIT_TYPE'] === editType
                            && latestUndo['INVERSE_ACTION']['POS'] === pos - 1) {
                        updateLastUndoAction = true;
                    }
                }
            } else {
                // one character deletion
                if (i === value.length - 1
                        || value.substring(i+1) === newContent.substring(i)) {
                    pos = i;
                    editType = 'DELETE';
                    if (latestUndo && latestUndo['INVERSE_ACTION']['EDIT_TYPE'] === editType
                            && latestUndo['INVERSE_ACTION']['POS'] === pos + 1) {
                        updateLastUndoAction = true;
                    }
                }
            }
        } else {
            updateLastUndoAction = false;
        }

        let inverseAction = {
            INVERSE_ACTION : {
                INVERSE_ACTION : {
                    EDIT_TYPE : editType,
                    POS : pos,
                }
            }
        };
        var newUndoStack;
        if (updateLastUndoAction) {
            inverseAction['INVERSE_ACTION'].value = latestUndo.value;
            let undoAction = {...inverseAction['INVERSE_ACTION']};
            newUndoStack = [
                undoAction,
                ...state['UNDO_STACK'].slice(1)
            ];
        } else {
            inverseAction['INVERSE_ACTION'].value = value;
            let undoAction = {...inverseAction['INVERSE_ACTION']};
            newUndoStack = [
                undoAction,
                ...state['UNDO_STACK']
            ];
        }
        setValue(newContent);
        setState({UNDO_STACK : newUndoStack, REDO_STACK : []});
    }
            }
        });
    },[]);//Giving it an empty array acts like componentDidMount as in, it only runs once.
    const inputRef = React.useRef(null);
    return <div style={{display: 'inline-block',verticalAlign:'text-top'}} onKeyUp={function(event) {
        if (!event.ctrlKey) return;
        switch (event.key) {
            case 'z':
            if (state['UNDO_STACK'].length === 0) return state;
            let undoAction = state['UNDO_STACK'][0],
            inverseAction = {...undoAction['INVERSE_ACTION'],
                                INVERSE_ACTION : {...undoAction, INVERSE_ACTION : undefined}},
            newUndoStack = state['UNDO_STACK'].slice(1);console.log('undo',state);
            window.mathField.latex(undoAction.value);
            setValue(undoAction.value);
            setState({UNDO_STACK : newUndoStack,REDO_STACK : [
                    inverseAction,
                    ...state['REDO_STACK']
                ]});
            break;
            case 'y':
            if (state['REDO_STACK'].length === 0) return state;
            let redoAction = state['REDO_STACK'][0];
            // this ret has its redo-actions set incorrectly now, because the actions are re-used
            // in a normal mutation any edit should clear the redo stack (because you are back
            // in history and making a new edit, you need to start tracking this branch in time)
            // For redo actions, the stack should be maintained, this is restored below.
            inverseAction = {...redoAction['INVERSE_ACTION'], INVERSE_ACTION : redoAction};
            window.mathField.latex(redoAction.value);
            setValue(redoAction.value);
            setState({UNDO_STACK : [
                    inverseAction,
                    ...state['UNDO_STACK']
                ],
                REDO_STACK : state['REDO_STACK'].slice(1, state['REDO_STACK'].length),
            });
        }
        }}>
        <div style={{overflow: 'auto', display: 'inline-block'}}>
            <textarea ref={Textarea} onFocus={()=>setFocus(true)} onBlur={e=>{if(!e.target.parentNode.parentNode.parentNode.parentNode.contains(e.relatedTarget))setFocus(false)}} />
            <span ref={inputRef} style={{minWidth:'200px',padding:'5px',margin:'2px'}}/>
            <input name="latex" type="hidden" value={value} />
        </div>
        {focused&&<div style={{position: "relative"}}>
            <TexButtons
        className="math-input-buttons absolute"
        onInsert={(value) => {
            if (_(value).isFunction()) {
                value(window.mathField);
            } else if (value[0] === '\\') {
                window.mathField.cmd(value).focus();
            } else {
                window.mathField.write(value).focus();
            }
            mathField.focus();
        }} />
        </div>}
    </div>;
}
window.addEventListener("load",() => {
    const root = ReactDOM.createRoot(document.forms[0]);
    root.render(<>
        <label><code>Topic:</code><input type="text" name="topic" size="4" style={{margin:'2px'}} defaultValue={<?php if (isset($post)) echo json_encode($post['topic']);?>}/></label><br/>
        <label><code>Title:</code><input type="text" name="title" style={{margin:'2px'}} defaultValue={<?php if (isset($post)) echo json_encode($post['title']);?>}/></label><br/>
        <label><code>Input:</code>
        <MathInput/>
        </label><br/>
        <input type="Submit"/>
    </>);
});