package core

type WorldCupQualificationError struct {
	IsWorldCupQualificationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewWorldCupQualificationError(code string, msg string, ctx *Context) *WorldCupQualificationError {
	return &WorldCupQualificationError{
		IsWorldCupQualificationError: true,
		Sdk:              "WorldCupQualification",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *WorldCupQualificationError) Error() string {
	return e.Msg
}
