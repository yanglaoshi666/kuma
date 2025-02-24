package commands

import (
	"strconv"
	"strings"

	"github.com/kumahq/kuma/pkg/transparentproxy/iptables/parameters"
)

type Command struct {
	long       string
	short      string
	chainName  string
	position   int
	parameters []*parameters.Parameter
}

func (c *Command) Build(verbose bool) string {
	flag := c.short

	if verbose {
		flag = c.long
	}

	cmd := []string{flag}

	if c.chainName != "" {
		cmd = append(cmd, c.chainName)
	}

	if c.position != 0 {
		cmd = append(cmd, strconv.Itoa(c.position))
	}

	for _, parameter := range c.parameters {
		if parameter != nil {
			cmd = append(cmd, parameter.Build(verbose))
		}
	}

	return strings.Join(cmd, " ")
}

func Append(chainName string, parameters []*parameters.Parameter) *Command {
	return &Command{
		long:       "--append",
		short:      "-A",
		position:   0,
		chainName:  chainName,
		parameters: parameters,
	}
}

func Insert(chainName string, position int, parameters []*parameters.Parameter) *Command {
	return &Command{
		long:       "--insert",
		short:      "-I",
		chainName:  chainName,
		position:   position,
		parameters: parameters,
	}
}
